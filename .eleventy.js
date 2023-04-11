module.exports = (eleventyConfig) => {
	const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
	const path = require("path");

	eleventyConfig.setServerOptions({
		showAllHosts: true,
	});

	eleventyConfig.addPlugin(EleventyVitePlugin, {
		viteOptions: {
			build: {
				assetsInlineLimit: 0,
				sourcemap: "true",
				manifest: true,
				rollupOptions: {
					input: path.resolve(__dirname, "src/assets/js/main.js"),
				},
			},
		},
	});

	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy("./src/assets/");

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
