import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "./src/main.ts",
  output: [
    {
      file: "./dist/browser-storage.js",
      name: "bs",
      format: "umd",
    },
    {
      file: "./dist/browser-storage.min.js",
      name: "bs",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [typescript()]
};
