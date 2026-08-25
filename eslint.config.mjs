import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import security from "eslint-plugin-security";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    plugins: { security },
    // These rules cover code-execution and unsafe-regex classes without
    // flagging the typed content maps and controlled filesystem test helpers
    // that are intentionally used by this static-site project.
    rules: {
      "security/detect-eval-with-expression": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-new-buffer": "error",
      "security/detect-unsafe-regex": "error",
      "security/detect-possible-timing-attacks": "error",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
