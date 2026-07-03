/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主域名统一色调
        primary: {
          DEFAULT: '#1E3A5F',
          dark: '#162E4D',
          light: '#2A4A73',
        },
        secondary: '#3B82F6',

        // 产品主题色
        'collectra': {
          DEFAULT: '#C89B3C',
          dark: '#A67D30',
          light: '#D4AF50',
        },
        'fetchera': {
          DEFAULT: '#1668CC',
          dark: '#0F5099',
          light: '#2A7ADD',
        },
        'bam': {
          DEFAULT: '#1a3a5c',
          dark: '#122943',
          light: '#244B73',
        },
        'resontra': {
          DEFAULT: '#6B3A2A',
          dark: '#4F2A1E',
          light: '#8C4E38',
        },

        // 中性色
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}