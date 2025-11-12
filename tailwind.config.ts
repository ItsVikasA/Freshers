import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'cursive'],
        space: ['var(--font-space)', 'monospace'],
        zaslia: ['var(--font-zaslia)', 'cursive'],
        brillant: ['var(--font-brillant)', 'cursive'],
      },
      colors: {
        primary: '#00D9FF',
        secondary: '#FF10F0',
        accent: '#FFD700',
        neon: {
          blue: '#00D9FF',
          pink: '#FF10F0',
          purple: '#9D00FF',
          green: '#39FF14',
          yellow: '#FFD700',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #00D9FF 0%, #FF10F0 50%, #9D00FF 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #0a0118, #1a0633)',
        'neon-glow': 'radial-gradient(ellipse at center, rgba(0,217,255,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,217,255,0.5), 0 0 40px rgba(255,16,240,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,217,255,0.8), 0 0 80px rgba(255,16,240,0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        neonPulse: {
          '0%, 100%': { textShadow: '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF' },
          '50%': { textShadow: '0 0 20px #FF10F0, 0 0 40px #FF10F0, 0 0 60px #FF10F0' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,217,255,0.6), 0 0 40px rgba(0,217,255,0.4)',
        'neon-pink': '0 0 20px rgba(255,16,240,0.6), 0 0 40px rgba(255,16,240,0.4)',
        'neon-purple': '0 0 20px rgba(157,0,255,0.6), 0 0 40px rgba(157,0,255,0.4)',
      },
    },
  },
  plugins: [],
}
export default config
