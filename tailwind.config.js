/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/svhighlight/**/*.svelte',
  ],
  theme: {
    extend: {
      keyframes: {
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(100% + var(--gap)))' },
        },
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'marquee-down': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(100% + var(--gap)))' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
        'marquee-right': 'marquee-right var(--duration, 40s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 40s) linear infinite',
        'marquee-down': 'marquee-down var(--duration, 40s) linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
