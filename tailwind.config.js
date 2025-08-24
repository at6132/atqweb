/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        atq: {
          black:   "#000000",
          white:   "#FFFFFF",
          gray:    "#666666",
          border:  "#E5E5E5",
        },
      },
      borderRadius: { 
        xl: "16px", 
        "2xl": "20px" 
      },
      fontFamily: {
        grotesk: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans'],
      },
      fontSize: {
        'xs': ['13px', '20px'],
        'sm': ['15px', '24px'],
        'base': ['15px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['24px', '32px'],
        '2xl': ['32px', '40px'],
      },
      letterSpacing: {
        'tighter': '-0.01em',
      }
    },
  },
  plugins: [],
};
