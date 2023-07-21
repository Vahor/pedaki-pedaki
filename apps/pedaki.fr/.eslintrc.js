module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    project: ["./tsconfig.json", "../packages/*/tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
