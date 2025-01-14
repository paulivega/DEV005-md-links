module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'jest/globals': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'ignorePatterns': ['md-links.spec.js',],
    'rules': {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],}
};
