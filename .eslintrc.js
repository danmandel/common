module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	// extends: ['plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			modules: true,
		},
		tsconfigRootDir: __dirname,
	},
	plugins: [
		// 'react',
		'@typescript-eslint',
		'import',
		'prefer-arrow',
		// 'flowtype',

		'@typescript-eslint/eslint-plugin',
		'prettier',

		//'eslint:recommended',
		//'plugin:react/recommended',
		// 'plugin:@typescript-eslint/recommended',
		// 'prettier/@typescript-eslint',
		//'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'warn',
		'@typescript-eslint/array-type': 'warn',
		'@typescript-eslint/await-thenable': 'warn',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/class-name-casing': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'warn',
			{
				overrides: {
					constructors: 'off',
				},
			},
		],
		//'@typescript-eslint/indent': [2, 'tab'],
		'@typescript-eslint/interface-name-prefix': 'off',
		// '@typescript-eslint/member-delimiter-style': [
		//   'warn',
		//   'error',
		//   {
		//     multiline: {
		//       delimiter: 'none',
		//       requireLast: true,
		//     },
		//     singleline: {
		//       delimiter: 'semi',
		//       requireLast: false,
		//     },
		//   },
		// ],
		'@typescript-eslint/member-ordering': 'warn',
		'@typescript-eslint/no-angle-bracket-type-assertion': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extraneous-class': 'warn',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/no-for-in-array': 'warn',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-misused-new': 'warn',
		'@typescript-eslint/no-namespace': 'warn',
		// '@typescript-eslint/no-non-null-assertion': 'warn',
		// '@typescript-eslint/no-object-literal-type-assertion': 'warn',
		// '@typescript-eslint/no-param-reassign': 'warn',
		'@typescript-eslint/no-parameter-properties': 'warn',
		'@typescript-eslint/no-require-imports': 'warn',
		'@typescript-eslint/no-this-alias': 'warn',
		// '@typescript-eslint/no-triple-slash-reference': 'warn',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/no-unnecessary-type-assertion': 'warn',
		//'@typescript-eslint/no-use-before-declare': 'warn',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
		// '@typescript-eslint/prefer-interface': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'warn',
		'@typescript-eslint/promise-function-async': 'warn',
		//'@typescript-eslint/quotes': ['warn', 'single', 'backtick'],
		'@typescript-eslint/restrict-plus-operands': 'warn',
		//'@typescript-eslint/semi': ['warn', null],
		// '@typescript-eslint/space-within-parens': ['warn', 'never'],
		// '@typescript-eslint/type-annotation-spacing': 'warn',
		'@typescript-eslint/unbound-method': 'warn',
		'@typescript-eslint/unified-signatures': 'warn',
		// 'arrow-body-style': ['warn', 'never'],
		// 'arrow-parens': ['warn', 'as-needed'],
		camelcase: 'warn',
		'class-methods-use-this': 'warn',
		complexity: [
			'warn',
			{
				max: 20,
			},
		],
		'constructor-super': 'warn',
		// curly: ['warn', 'multi-line'],
		'default-case': 'warn',
		'dot-notation': 'warn',
		//'eol-last': 'warn',
		eqeqeq: ['warn', 'always'],
		'guard-for-in': 'warn',
		'id-blacklist': ['warn', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean', 'Undefined'],
		'id-match': 'warn',
		'import/no-default-export': 'off',
		'import/no-internal-modules': 'warn',
		'import/order': 'warn',
		//'linebreak-style': ['warn', 'unix'],
		'max-classes-per-file': ['warn', 1],
		'max-len': [
			'warn',
			{
				code: 120,
			},
		],
		'max-lines': ['warn', 300],
		'new-parens': 'off',
		//'newline-per-chained-call': 'warn',
		'no-bitwise': 'warn',
		'no-caller': 'warn',
		'no-cond-assign': 'warn',
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-duplicate-case': 'warn',
		'no-duplicate-imports': 'warn',
		'no-empty': 'warn',
		'no-eval': 'warn',
		'no-fallthrough': 'warn',
		'no-invalid-this': 'warn',
		'no-irregular-whitespace': 'warn',
		// 'no-magic-numbers': [
		//   'warn',
		//   {
		//     ignore: [-1, 0, 1],
		//   },
		// ],
		//'no-multiple-empty-lines': 'warn',
		'no-new-wrappers': 'warn',
		// 'no-null/no-null': 'warn',
		'no-redeclare': 'warn',
		'no-return-await': 'warn',
		'no-sequences': 'warn',
		'no-shadow': [
			'warn',
			{
				hoist: 'all',
			},
		],
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-throw-literal': 'warn',
		// 'no-trailing-spaces': 'warn',
		'no-undef-init': 'warn',
		//'no-underscore-dangle': ['warn', 'off'],
		'no-unsafe-finally': 'warn',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'off',
		'no-var': 'warn',
		'no-void': 'warn',
		'object-shorthand': 'warn',
		'one-var': 'off',
		// 'padding-line-between-statements': [
		//   'warn',
		//   'error',
		//   {
		//     blankLine: 'always',
		//     prev: '*',
		//     next: 'return',
		//   },
		// ],
		'prefer-arrow/prefer-arrow-functions': 'warn',
		'prefer-const': 'warn',
		'prefer-object-spread': 'warn',
		//'prefer-readonly': 'warn',
		'prefer-template': 'warn',
		'quote-props': 'off',
		radix: 'warn',
		// 'space-before-function-paren': 'warn',
		// 'unicorn/filename-case': 'warn',
		'use-isnan': 'warn',
		yoda: 'warn',
		'prettier/prettier': 'error',
		// '@typescript-eslint/tslint/config': [
		//   'error',
		//   {
		//     rules: {
		//       ban: [true, 'eval'],
		//       'comment-format': [true, 'check-space'],
		//       'completed-docs': [
		//         true,
		//         'classes',
		//         'enums',
		//         'functions',
		//         'interfaces',
		//         'methods',
		//         'namespaces',
		//         'properties',
		//         'types',
		//         'variables',
		//       ],
		//       deprecation: true,
		//       encoding: true,
		//       'import-blacklist': [true, 'rxjs', 'lodash'],
		//       'import-spacing': true,
		//       'jsdoc-format': [true, 'check-multiline-start'],
		//       'match-default-export-name': true,
		//       'no-boolean-literal-compare': true,
		//       'no-dynamic-delete': true,
		//       'no-implicit-dependencies': true,
		//       'no-import-side-effect': [
		//         true,
		//         {
		//           'ignore-module': '(\\.html|\\.css)$',
		//         },
		//       ],
		//       'no-inferred-empty-object-type': true,
		//       'no-mergeable-namespace': true,
		//       'no-reference-import': true,
		//       'no-unnecessary-callback-wrapper': true,
		//       'no-unsafe-any': true,
		//       'number-literal-format': true,
		//       'object-literal-sort-keys': true,
		//       'one-line': [
		//         true,
		//         'check-catch',
		//         'check-finally',
		//         'check-else',
		//         'check-open-brace',
		//         'check-whitespace',
		//       ],
		//       parserOptions: true,
		//       'prefer-conditional-expression': true,
		//       'prefer-switch': [
		//         true,
		//         {
		//           'min-cases': 3,
		//         },
		//       ],
		//       'prefer-while': true,
		//       'return-undefined': true,
		//       'strict-boolean-expressions': true,
		//       'strict-type-predicates': true,
		//       'switch-final-break': true,
		//       'trailing-comma': true,
		//       whitespace: [
		//         true,
		//         'check-branch',
		//         'check-operator',
		//         'check-typecast',
		//       ],
		//     },
		//   },
		// ],
	},
	settings: {
		// react: {
		// 	pragma: 'React',
		// 	version: 'detect',
		// },
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
