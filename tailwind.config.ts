import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "soft-blue" : "#6495ED",
        "cta-1" : "#50C878",
        "cta-3" : "#228B22",
        "text-1" : "#2F4F4F",
        "text-4" : "#F8F8FF",
        "WarmCoral-1" : "#FFDAB9",
        "WarmCoral-4" : "#FF6347",
        "WarmCoral-3" : "#FF7F50",
        "MutedYellow-4" : "#FFD700",
        "SoftBlue-3" : "#87CEEB"
      }
    },
  },
  plugins: [],
}
export default config
