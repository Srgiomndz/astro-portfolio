/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        myfont1: [
          'PPNeueMachina-InktrapUltrabold',
          
        ],
        myfont2: [
          
          'PPNeueMachina-InktrapLight',
          
        ],
        myfont3: [
          
          'PPNeueMachina-PlainRegular',
        ],
      },
    },
  },
  plugins: [],
}
