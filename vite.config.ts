/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

interface ViteConfigInput {
  mode: string;
  command: string;
}

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === "production"
      ? "[hash:base64:10]"
      : "[name]__[local]___[hash:base64:2]";
  const setupFiles = ["./src/tests/setupTests.ts"];
  return defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@fonts": path.resolve(__dirname, "public/fonts"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
    plugins: [react()],
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName,
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles,
    },
  });
};
