import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const deploymentConfig = JSON.parse(readFileSync("vercel.json", "utf8"));
const siteUrl = deploymentConfig.env?.NEXT_PUBLIC_SITE_URL;

if (typeof siteUrl !== "string" || !siteUrl.startsWith("https://")) {
  throw new Error("vercel.json must configure an HTTPS NEXT_PUBLIC_SITE_URL.");
}

const environment = { ...process.env, NEXT_PUBLIC_SITE_URL: siteUrl };
const command = process.platform === "win32" ? "npm.cmd" : "npm";
const npx = process.platform === "win32" ? "npx.cmd" : "npx";

for (const [executable, args] of [
  [command, ["run", "build"]],
  [npx, ["playwright", "test"]],
]) {
  const result = spawnSync(executable, args, {
    cwd: process.cwd(),
    env: environment,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
