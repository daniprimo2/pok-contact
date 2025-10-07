import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        primary: {
          teal: 'var(--primary-teal)',
          blue: 'var(--primary-blue)',
          purple: 'var(--primary-purple)',
        },
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--primary-gradient)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config
