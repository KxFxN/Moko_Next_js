/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Thai", "sans-serif"],
      },
      colors: {
        "purple-custom": "rgba(164,136,255,0.60)",
        "pink-custom": "rgba(255,133,152,0.85)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom":
          "radial-gradient(circle at 45% 35%, rgba(255, 133, 152, 0.85) 0%, rgba(255, 133, 152, 0.85) 15%, rgba(164, 136, 255, 0.60) 70%)",
        "gradient-custom-lg":
          "radial-gradient(circle at 25% 50%, rgba(255, 133, 152, 0.85) 0%, rgba(255, 133, 152, 0.85)30%, rgba(164, 136, 255, 0.60) 80%)",
        "gradient-parallax":
          "linear-gradient(to bottom, rgb(26,82,72) 10%, rgb(27,106,127) 30%, rgb(28,139,200) 90%)",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    require('daisyui'),
  ],
};
