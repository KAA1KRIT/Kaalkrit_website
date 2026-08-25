import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const staticRoot = ".next/static";

const secretPatterns = [
  /AKIA[0-9A-Z]{16}/,
  /(?:sk|rk)_(?:live|test)_[A-Za-z0-9_-]{16,}/,
  /gh[pousr]_[A-Za-z0-9]{36,}/,
  /xox[baprs]-[A-Za-z0-9-]{10,}/,
  /-----BEGIN (?:RSA|EC|OPENSSH|PRIVATE) KEY-----/,
];

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

if (!existsSync(staticRoot)) {
  console.error(
    "Secret scan requires a production build. Run npm run build first.",
  );
  process.exit(1);
}

const findings = [];
for (const file of filesIn(staticRoot).filter((path) => path.endsWith(".js"))) {
  const source = readFileSync(file, "utf8");
  for (const pattern of secretPatterns) {
    if (pattern.test(source)) findings.push(`${file}: ${pattern}`);
  }
}

if (findings.length) {
  console.error(
    "Potential secrets found in client bundles:\n" + findings.join("\n"),
  );
  process.exit(1);
}

console.log("Client bundle secret scan passed.");
