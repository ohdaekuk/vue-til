module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		"no-console": "off",
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: "all",
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: "avoid",
			},
		],
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				jest: true,
			},
		},
	],
};
