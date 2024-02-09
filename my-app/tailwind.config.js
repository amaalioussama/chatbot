/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../my-app/src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '../my-app/src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    '../my-app/src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'serif-gujarati': ['Noto Serif Gujarati', 'serif'],
        'arimo-hebrew-subset': ['Arimo Hebrew Subset', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
