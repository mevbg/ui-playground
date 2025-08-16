export default {
  ignoreFiles: ['./.nuxt/**/*', './design/**/*', './dist/**/*.css', './node_modules/**/*.css'],
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-recommended-vue',
    'stylelint-prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-recommended-vue', 'stylelint-config-html/vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global', 'placeholder', 'input-placeholder', 'deep', 'slotted']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['global', 'input-placeholder', 'v-deep', 'v-slotted']
          }
        ]
      }
    }
  ],
  rules: {
    'no-duplicate-selectors': null,
    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 5,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-deprecated': null,
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['display-mode']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'placeholder', 'input-placeholder']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['global', 'input-placeholder']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: []
      }
    ]
  }
};
