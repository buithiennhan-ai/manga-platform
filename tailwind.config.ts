module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        dark: '#0f172a',
        accent: '#facc15',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(249,115,22,0.22), transparent 40%)',
      },
    },
  },
  plugins: [],
};
