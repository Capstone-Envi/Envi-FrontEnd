/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: {
          100: '#f1f2fd',
          200: '#cacdf8',
          300: '#a3a8f2',
          400: '#7c83ed',
          500: '#535CE8',
          600: '#202de1',
          700: '#1821ad',
          800: '#101778',
          900: '#090d43',
          DEFAULT: '#535CE8',
        },
        secondary: {
          100: '#fff4f0',
          200: '#ffd5c3',
          300: '#feb697',
          400: '#fe976b',
          500: '#FE763E',
          600: '#f84b01',
          700: '#b63701',
          800: '#742301',
          900: '#310f00',
          DEFAULT: '#FE763E',
        },
        info: {
          100: '#f1f8fd',
          200: '#c3e1f8',
          300: '#94c9f2',
          400: '#66b2ec',
          500: '#379ae6',
          600: '#197dca',
          700: '#125d95',
          800: '#0c3c61',
          900: '#061c2d',
          DEFAULT: '#379ae6',
        },
        warning: {
          100: '#fef9ee',
          200: '#fae7c0',
          300: '#f6d491',
          400: '#f2c263',
          500: '#efb034',
          600: '#d29211',
          700: '#98690c',
          800: '#5d4108',
          900: '#221803',
          DEFAULT: '#efb034',
        },
        danger: {
          100: '#fdf2f2',
          200: '#f5c4c6',
          300: '#ed9699',
          400: '#e5696d',
          500: '#de3b40',
          600: '#c12126',
          700: '#93191d',
          800: '#641114',
          900: '#36090b',
          DEFAULT: '#de3b40',
        },
        success: {
          100: '#eefdf3',
          200: '#b8f5cd',
          300: '#82eea6',
          400: '#4ce77f',
          500: '#1dd75b',
          600: '#17a948',
          700: '#117b34',
          800: '#0a4d20',
          900: '#041e0d',
          DEFAULT: '#1dd75b',
        },
        'color-1': {
          100: '#fefaeb',
          200: '#faedbd',
          300: '#f7e08e',
          400: '#f4d460',
          500: '#F1C932',
          600: '#d4a90f',
          700: '#98790b',
          800: '#5c4906',
          900: '#1f1902',
          DEFAULT: '#f1c932',
        },
        'color-2': {
          100: '#effcfc',
          200: '#bdf1f2',
          300: '#8be6e7',
          400: '#59dbdd',
          500: '#2ACCCF',
          600: '#21a1a3',
          700: '#187576',
          800: '#0f494a',
          900: '#061d1d',
          DEFAULT: '#2ACCCF',
        },
        'color-3': {
          100: '#f6f3fc',
          200: '#d7c8f0',
          300: '#b89de3',
          400: '#9973d7',
          500: '#7B48CC',
          600: '#6232b0',
          700: '#4c2789',
          800: '#361c62',
          900: '#21113b',
          DEFAULT: '#7B48CC',
        },
      },
      fontSize: {
        t1: ['0.6875rem', '1.125rem'],
        t2: ['0.75rem', '1.25rem'],
        t3: ['0.875rem', '1.375rem'],
        t4: ['1rem', '1.625rem'],
        t5: ['1.125rem', '1.75rem'],
        t6: ['1.25rem', '1.875rem'],
        t7: ['1.5rem', '2.25rem'],
        t8: ['2rem', '3rem'],
        t9: ['2.5rem', '3.5rem'],
        t10: ['3rem', '4.25rem'],
      },
      spacing: {
        s0: '0.125rem',
        s1: '0.25rem',
        s2: '0.375rem',
        s3: '0.5rem',
        s4: '0.75rem',
        s5: '1rem',
        s6: '1.25rem',
        s7: '1.5rem',
        s8: '1.75rem',
        s9: '2rem',
        s10: '2.25rem',
        s11: '2.5rem',
        s12: '2.75rem',
        s13: '3rem',
        s14: '3.5rem',
        s15: '4rem',
        s16: '6rem',
        s17: '8rem',
        s18: '12rem',
        s19: '16rem',
        s20: '24rem',
      },
      fontFamily: {
        heading: 'Sora',
        body: 'Public Sans',
        exo: ['Exo'],
        poppins: ["Poppins"]
      },
      width: {
        Sz_NONE: '0rem',
        Sz0: '0.125rem',
        Sz1: '0.25rem',
        Sz2: '0.375rem',
        Sz3: '0.5rem',
        Sz4: '0.75rem',
        Sz5: '1rem',
        Sz6: '1.25rem',
        Sz7: '1.5rem',
        Sz8: '1.75rem',
        Sz9: '2rem',
        Sz10: '2.25rem',
        Sz11: '2.5rem',
        Sz12: '2.75rem',
        Sz13: '3rem',
        Sz14: '3.25rem',
        Sz15: '3.5rem',
        Sz16: '3.75rem',
        Sz17: '4rem',
        Sz18: '6rem',
        Sz19: '8rem',
        Sz20: '12rem',
        Sz21: '16rem',
        Sz22: '24rem',
        Sz23: '32rem',
        Sz24: '40rem',
        Sz25: '48rem',
        Sz26: '56rem',
        Sz27: '64rem'
      },
      height: {
        Sz_NONE: '0rem',
        Sz0: '0.125rem',
        Sz1: '0.25rem',
        Sz2: '0.375rem',
        Sz3: '0.5rem',
        Sz4: '0.75rem',
        Sz5: '1rem',
        Sz6: '1.25rem',
        Sz7: '1.5rem',
        Sz8: '1.75rem',
        Sz9: '2rem',
        Sz10: '2.25rem',
        Sz11: '2.5rem',
        Sz12: '2.75rem',
        Sz13: '3rem',
        Sz14: '3.25rem',
        Sz15: '3.5rem',
        Sz16: '3.75rem',
        Sz17: '4rem',
        Sz18: '6rem',
        Sz19: '8rem',
        Sz20: '12rem',
        Sz21: '16rem',
        Sz22: '24rem',
        Sz23: '32rem',
        Sz24: '40rem',
        Sz25: '48rem',
        Sz26: '56rem',
        Sz27: '64rem'
      },
      borderRadius: {
        xs: '0.1875rem',
        s: '0.25rem',
        m: '0.375rem',
        l: '0.5rem',
        xl: '0.75rem',
        '100-percent': '100%'
      },
      boxShadow: {
        xs: '0px 0px 1px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.2)',
        s: '0px 2px 5px rgba(23, 26, 31, 0.17), 0px 0px 2px rgba(23, 26, 31, 0.2)',
        m: '0px 4px 9px rgba(23, 26, 31, 0.19), 0px 0px 2px rgba(23, 26, 31, 0.2)',
        l: '0px 8px 17px rgba(23, 26, 31, 0.23), 0px 0px 2px rgba(23, 26, 31, 0.2)',
        xl: '0px 17px 35px rgba(23, 26, 31, 0.32), 0px 0px 2px rgba(23, 26, 31, 0.2)'
      },
      animation: {
        blob: 'blob 10s infinite',
        text: 'text 5s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(0, 20px) scale(1)',
          },
          '75%': {
            transform: 'translate(-20px, -15px) scale(0.9)',
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      screens: {
        xl3: '1700px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
}