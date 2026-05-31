/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5865F2',
        secondary: '#EB459E',
        success: '#57F287',
        warning: '#FEE75C',
        danger: '#ED4245',
        dark: {
          bg: '#1a1a2e',
          darker: '#16162a',
          card: '#1f1f3a',
        },
        text: {
          main: '#ffffff',
          muted: '#a0a0a0',
        },
        border: '#2a2a4a',
      },
    },
  },
  plugins: [],
}
