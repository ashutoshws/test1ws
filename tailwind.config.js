/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'gray-900': '#111827',
        'purple-100': '#E9E9FE',
      },
      fontSize: {
        'label-xlarge-bold': [
          '18px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.4px',
            fontWeight: '700',
            fontFamily: 'Satoshi',
            fontStyle: 'normal',
            textAlign: 'center',
          },
        ],
        'label-large-bold': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: 'normal',
            fontWeight: '700',
            fontFamily: 'Satoshi',
          },
        ],
        'label-medium-regular': [
          '11px',
          {
            lineHeight: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            fontFamily: 'Satoshi',
          },
        ],
        'label-medium-bold': [
          '11px',
          {
            lineHeight: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            fontFamily: 'Satoshi',
          },
        ],
        'label-small-bold': [
          '12px',
          {
            lineHeight: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            fontFamily: 'Satoshi',
          },
        ],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
