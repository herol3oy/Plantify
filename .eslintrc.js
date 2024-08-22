module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native", "simple-import-sort"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
