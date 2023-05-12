/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  endOfLine: 'lf',
  printWidth: 120,
  semi: false,
  tabWidth: 2,
  singleQuote: true,
}

module.exports = config
