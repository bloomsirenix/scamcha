/* global module */
module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-newline": "error",
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"array-callback-return": "error",
		"array-element-newline": "off",
		"arrow-body-style": "off",
		"arrow-parens": [
			"error",
			"always"
		],
		"arrow-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs"
		],
		"callback-return": "error",
		"camelcase": "error",
		"capitalized-comments": "off",
		"class-methods-use-this": "error",
		"comma-dangle": "off",
		"comma-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"complexity": "off",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "off",
		"consistent-this": "error",
		"curly": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": "error",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		"func-names": "error",
		"func-style": [
			"error",
			"expression",
		],
		"function-call-argument-newline": [
			"error",
			"consistent"
		],
		"function-paren-newline": "off",
		"generator-star-spacing": "error",
		"global-require": "error",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-denylist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": "error",
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			},
		],
		"indent-legacy": "off",
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"line-comment-position": "off",
		"linebreak-style": "off",
		"lines-around-comment": "error",
		"lines-around-directive": "error",
		"lines-between-class-members": "error",
		"max-classes-per-file": "error",
		"max-depth": "off",
		"max-len": "off",
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"multiline-comment-style": "off",
		"new-cap": "error",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-console": "error",
		"no-constructor-return": "error",
		"no-continue": "error",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "off",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": [
			"error",
			{
				"lexicalBindings": false
			}
		],
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "off",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"no-magic-numbers": "off",
		"no-mixed-operators": "off",
		"no-mixed-requires": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-native-reassign": "error",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "error",
		"no-plusplus": [
			"error",
			{
				"allowForLoopAfterthoughts": true
			}
		],
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-restricted-exports": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-return-await": "off",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-spaced-func": "error",
		"no-sync": "error",
		"no-tabs": "off",
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable-loop": "error",
		"no-unused-expressions": "error",
		"no-use-before-define": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"object-shorthand": "error",
		"one-var": "off",
		"one-var-declaration-per-line": "error",
		"operator-assignment": [
			"error",
			"always"
		],
		"operator-linebreak": "error",
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "off",
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-reflect": "off",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": "off",
		"quotes": [
			"error",
			"double",
			{
				"allowTemplateLiterals": true
			}
		],
		"radix": "error",
		"require-atomic-updates": "error",
		"require-await": "error",
		"require-unicode-regexp": "off",
		"rest-spread-spacing": [
			"error",
			"never"
		],
		"semi": "error",
		"semi-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"semi-style": [
			"error",
			"last"
		],
		"sort-imports": "off",
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always"
		],
		"strict": [
			"error",
			"never"
		],
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": [
			"error",
			"never"
		],
		"template-tag-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"valid-jsdoc": "off",
		"vars-on-top": "error",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": [
			"error",
			"never"
		]
	}
};
