import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the output format
    target: "es2020", // or 'esnext' depending on your requirements

    // Configure Rollup options to expose 'chrome' as a global variable
    rollupOptions: {
      output: {
        // Expose 'chrome' as a global variable
        globals: {
          chrome: "chrome",
        },
      },
    },
  },
});
