import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Original Webflow runtime and custom code
    "public/**",
  ]),
  {
    // Markup migrated 1:1 from Webflow: plain <img> and <a> are intentional.
    files: ["src/app/**/_sections/**", "src/components/webflow/**"],
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
