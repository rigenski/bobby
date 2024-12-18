/** @type {import('prettier').Config} */
const config = {
    semi: true,
    useTabs: false,
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSpacing: true,
    bracketSameLine: false,
    tabWidth: 4,
    printWidth: 150,
    endOfLine: 'auto',
    quoteProps: 'as-needed',
    arrowParens: 'always',
    trailingComma: 'es5',
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
