import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react"; // 追加

export default defineConfig({
    plugins: [
        laravel({
            // input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            // typescriptが使えるように変更
            input: ["resources/css/app.css", "resources/ts/index.tsx"],
        }),
        react(), // 追加
    ],
});
