
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,jsx,ts.tsx}',
    './components/**/*.{js,jsx,ts.tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}
