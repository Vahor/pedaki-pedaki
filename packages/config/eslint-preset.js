module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["next", "prettier", "next/core-web-vitals"],
    ignorePatterns: [
        "*.tsbuildinfo",
        "node_modules",
        "dist",
        "coverage",
    ],
    settings: {
        next: {
            rootDir: ["apps/*/", "packages/*/"],
        },
    },
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": ["warn", {argsIgnorePattern: "^_"}],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-empty-function": "off",
    },
};