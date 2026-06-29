import { resolve } from "node:path";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

const buildVersion = `${pkg.version}-${new Date()
  .toISOString()
  .replace(/\D/g, "")
  .slice(0, 14)}`;

function appendAssetVersion() {
  return {
    name: "append-asset-version",
    transformIndexHtml(html) {
      const versionedHtml = html.replace(
        /(src|href)="([^"]+\.(?:js|css))"/g,
        (_match, attr, url) => `${attr}="${url}?v=${buildVersion}"`,
      );
      return versionedHtml.replace(
        /(<link\s+rel="modulepreload"[^>]+href="[^"]+)\?v=[^"]+"/g,
        "$1\"",
      );
    },
  };
}

export default defineConfig({
  plugins: [appendAssetVersion()],
  define: {
    __BUILD_VERSION__: JSON.stringify(buildVersion),
  },
  build: {
    target: "es2022",
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        ncfm: resolve(__dirname, "ncfm/index.html"),
      },
    },
  },
});
