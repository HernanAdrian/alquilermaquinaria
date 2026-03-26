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
        primary: {
          DEFAULT: '#E8621A',
          hover: '#C94E0F',
          light: '#FFF7F3',
          muted: '#FDEEE6',
        },
        dark: {
          DEFAULT: '#1E2832',
          light: '#2D3B4A',
        },
        neutral: {
          50: '#F7F6F4',
          100: '#EEEDE9',
          200: '#E5E4DF',
          400: '#9CA3AF',
          600: '#6B7280',
          900: '#1F2937',
        },
        success: '#16A34A',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display': ['52px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '1.35', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'xl': '12px',
        'lg': '8px',
        'md': '4px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.07)',
        'mobile-bar': '0 -4px 12px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
}
