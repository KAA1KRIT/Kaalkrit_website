import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const EXPECTED_GIT_LINK = {
  type: "github",
  org: "KAA1KRIT",
  repo: "Kaalkrit_website",
  productionBranch: "main",
};
const EXPECTED_PRODUCTION_ALIAS = "kaalkrit.vercel.app";

function fail(message) {
  throw new Error(`Vercel deployment verification failed: ${message}`);
}

function projectLink() {
  const projectFile = ".vercel/project.json";
  if (!existsSync(projectFile)) {
    fail(
      "project link is missing. Run `npx vercel link --yes --project kaalkrit --scope rossonerians-projects` first.",
    );
  }

  const { projectId, orgId } = JSON.parse(readFileSync(projectFile, "utf8"));
  if (!projectId || !orgId) fail("local project link does not contain IDs.");
  return { projectId, orgId };
}

function vercelProject() {
  const { projectId, orgId } = projectLink();
  const endpoint = `/v9/projects/${projectId}?teamId=${orgId}`;

  try {
    const output = execFileSync(
      "npx",
      ["vercel", "api", endpoint, "--raw", "--no-color"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] },
    );
    return JSON.parse(output);
  } catch (error) {
    fail(
      `could not read the linked Vercel project. Authenticate with \`npx vercel login\` and try again. ${error instanceof Error ? error.message : ""}`,
    );
  }
}

function verifyProject(project) {
  const link = project.link;
  if (!link) fail("project is not connected to a Git repository.");

  for (const [key, value] of Object.entries(EXPECTED_GIT_LINK)) {
    if (link[key] !== value) {
      fail(
        `expected Git ${key} to be ${value}, received ${link[key] ?? "none"}.`,
      );
    }
  }

  if (project.gitProviderOptions?.createDeployments !== "enabled") {
    fail("Git-created deployments are disabled.");
  }

  const production = project.targets?.production;
  if (production?.readyState !== "READY") {
    fail(
      `production is not ready (state: ${production?.readyState ?? "none"}).`,
    );
  }

  if (!production.alias?.includes(EXPECTED_PRODUCTION_ALIAS)) {
    fail(`production alias ${EXPECTED_PRODUCTION_ALIAS} is missing.`);
  }

  if (production.meta?.githubDeployment !== "1") {
    fail(
      "the current production deployment was not created by Git integration.",
    );
  }
}

function verifyCurrentCommit(project) {
  if (process.env.VERIFY_CURRENT_DEPLOYMENT !== "true") return;

  const currentCommit = execFileSync("git", ["rev-parse", "HEAD"], {
    encoding: "utf8",
  }).trim();
  const deployedCommit = project.targets?.production?.meta?.githubCommitSha;
  if (deployedCommit !== currentCommit) {
    fail(
      `production is at ${deployedCommit ?? "an unknown commit"}, not current HEAD ${currentCommit}. Wait for the Git deployment to complete, then retry.`,
    );
  }
}

const project = vercelProject();
verifyProject(project);
verifyCurrentCommit(project);

console.log(
  `Vercel Git deployment verified: ${EXPECTED_GIT_LINK.org}/${EXPECTED_GIT_LINK.repo} → ${EXPECTED_PRODUCTION_ALIAS} (${EXPECTED_GIT_LINK.productionBranch}).`,
);
