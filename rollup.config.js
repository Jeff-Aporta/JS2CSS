import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./index.mjs",
  output: {
    file: "./static/js/index.all.min.js",
    format: "iife",
    name: "JS2CSS",
  },
  plugins: [resolve({ extensions: [".mjs", ".js"] }), terser()],
};
