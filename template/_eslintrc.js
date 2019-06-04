module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  plugins: ["prettier", "vue"],
  parserOptions: {
    parser: "babel-eslint"
  }
};
