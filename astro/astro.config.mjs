// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: "vk7ia5ic",
			dataset: "production",
			apiVersion: "2025-11-02",
			useCdn: false,
		}),
		react(),
	],
});
