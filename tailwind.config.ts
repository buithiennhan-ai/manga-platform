module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',     // Xanh dương chủ đạo
        secondary: '#004a99',   // Xanh dương đậm
        light: '#e8f0ff',       // Xanh dương nhạt
        neutral: '#f5f7fa',     // Xám nhạt gần trắng
        dark: '#1a1a1a',        // Đen mềm
        text: '#2d3748',        // Xám tối cho text
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 102, 204, 0.08)',
        md: '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        safe: '1rem',
      },
    },
  },
  plugins: [],
};
