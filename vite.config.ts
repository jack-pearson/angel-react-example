/*
 * @Author: your name
 * @Date: 2021-08-27 16:27:24
 * @LastEditTime: 2021-11-01 19:02:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angel-ui-example/vite.config.ts
 */
import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
