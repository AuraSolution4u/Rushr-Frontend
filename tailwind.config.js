const theme = require('./src/theme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: theme,
  },
  plugins: [],
};
