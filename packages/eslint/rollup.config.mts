import fs from "node:fs/promises";
import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { dts } from "rollup-plugin-dts";

const pkg = JSON.parse(
  await fs.readFile(new URL("./package.json", import.meta.url), "utf-8")
);

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        manualChunks(id) {
          if (id.includes("util")) return "utils";
          if (id.includes("configs")) return "configs";
          if (id.includes("rules")) {
            return "rules";
          }
        },
        chunkFileNames: "[name].js",
      },
    ],
    plugins: [commonjs(), esbuild()],
    external: [
      ...Object.keys(pkg.dependencies || []),
      ...Object.keys(pkg.peerDependencies || []),
      "node:process",
    ],
  },
  {
    input: "./src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]);
