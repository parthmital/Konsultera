import { defineConfig, type PluginOption } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
	return {
		plugins: [
			tailwindcss(),
			tsConfigPaths({ projects: ["./tsconfig.json"] }),
			tanstackStart({
				server: { entry: "server" },
			}),
			viteReact(),
		].filter(Boolean) as PluginOption[],
		resolve: {
			alias: {
				"@": `${process.cwd()}/src`,
			},
			dedupe: [
				"react",
				"react-dom",
				"react/jsx-runtime",
				"react/jsx-dev-runtime",
			],
		},
		server: {
			host: "::",
			port: 8080,
		},
	};
});
