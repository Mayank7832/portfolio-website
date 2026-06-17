import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#071014',
        panel: '#0c171c',
        line: '#1f333b',
        mint: '#52f0b1',
        cyan: '#54d6ff',
        amber: '#f5b84b',
        rose: '#f06d8c'
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        terminal: '0 24px 80px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
