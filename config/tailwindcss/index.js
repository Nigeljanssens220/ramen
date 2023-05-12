/** @type {import('tailwindcss').Config} */
const config = {
    content: ['./**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        // Any values specified here override the default tailwind settings
        borderRadius: {
          none: '0',
          4: '4px',
          8: '8px',
          12: '12px',
          16: '16px',
          20: '20px',
          24: '24px',
          28: '28px',
          32: '32px',
          48: '48px',
        },
        colors: {
          primary: {
            100: '#F5F7F9',
            200: '#DAE1E6',
            300: '#CAD2D9',
            400: '#8497A4',
            500: '#5C6F7C',
            600: '#33434E',
            700: '#212c33',
            DEFAULT: '#1F2937',
            900: '#141C22',
          },
          neutral: {
            100: '#F2F2F2',
            200: '#E5E5E5',
            300: '#CCCCCC',
            400: '#B3B3B3',
            500: '#808080',
            600: '#4D4D4D',
            800: '#262626',
          },
          accent: {
            orange: {
              100: '#FEF5EC',
              300: '#FFE4CC',
              400: '#F89731',
              500: '#EC7203',
              600: '#D96901',
              800: '#D95601',
            },
            blue: {
              100: '#F2F8FD',
              200: '#D3E7F9',
              300: '#B5D6F4',
              400: '#89BDEE',
              500: '#539FE5',
              600: '#0972D3',
              700: '#065299',
              800: '#033160',
            },
          },
          feedback: {
            red: {
              100: '#FFF7F7',
              500: '#EB6F6F',
              600: '#D91515',
            },
            green: {
              100: '#F2FCF3',
              600: '#037F0C',
            },
            orange: {
              100: '#FEF5EC',
              600: '#D96901',
            },
          },
          overlay: {
            DEFAULT: 'rgba(33, 44, 51, 0.7)',
          },
          placeholderColor: {
            DEFAULT: '#5C6F7C',
          },
          borderColor: {
            DEFAULT: '#DAE1E6',
          },
        },
        boxShadow: {
          100: '0px 4px 20px rgba(20, 28, 34, 0.12)',
          200: '0px 1px 14px rgba(20, 28, 34, 0.05), 0px 0px 4px rgba(51, 67, 78, 0.05)',
          300: '0px 6px 36px rgba(20, 28, 34, 0.1), 0px 1px 1px rgba(218, 225, 230, 0.4)',
          400: '0px 6px 12px 1px rgba(20, 28, 34, 0.12)',
        },
        fontFamily: {
          'open-sans': ['Open Sans', 'sans-serif'],
        },
        fontSize: {
          'heading-1': ['32px', { lineHeight: '40px' }],
          'heading-2': ['24px', { lineHeight: '30px' }],
          'heading-3': ['20px', { lineHeight: '24px' }],
          'heading-4': ['16px', { lineHeight: '20px' }],
          'heading-5': ['14px', { lineHeight: '18px' }],
          'heading-large': ['48px', { lineHeight: '54px' }],
          sm: ['12px', { lineHeight: '16px' }],
          md: ['14px', { lineHeight: '22px' }],
          lg: ['16px', { lineHeight: '24px' }],
          xl: ['18px', { lineHeight: '24px' }],
        },
        screens: {
          '2xs': '375px',
          xs: '768px',
          sm: '1024px',
          md: '1280px',
          lg: '1440px',
          xl: '1920px',
          '2xl': '2560px',
        },
        spacing: {
          '3xs': '2px',
          '2xs': '4px',
          xs: '8px',
          sm: '12px',
          md: '16px',
          lg: '20px',
          xl: '24px',
          '2xl': '32px',
          '3xl': '40px',
          '4xl': '48px',
          '5xl': '56px',
          '6xl': '64px',
          '7xl': '72px',
          '8xl': '80px',
        },
        padding: {
          '3px': '3px',
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          fadeOut: {
            from: { opacity: 1 },
            to: { opacity: 0 },
          },
          slideInFromRight: {
            from: { transform: 'translateX(100%)' },
            to: { transform: 'translateX(0)' },
          },
          slideInFromLeft: {
            from: { transform: 'translateX(-100%)' },
            to: { transform: 'translateX(0)' },
          },
          slideInFromTop: {
            from: { transform: 'translateY(-100%)' },
            to: { transform: 'translateY(0)' },
          },
          slideInFromBottom: {
            from: { transform: 'translateY(100%)' },
            to: { transform: 'translateY(0)' },
          },
          accordionDown: {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          accordionUp: {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
          slideDownAndFade: {
            from: { opacity: 0, transform: 'translateY(-4px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          slideLeftAndFade: {
            from: { opacity: 0, transform: 'translateX(4px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          slideUpAndFade: {
            from: { opacity: 0, transform: 'translateY(4px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          slideRightAndFade: {
            from: { opacity: 0, transform: 'translateX(-4px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          enterFromRight: {
            from: { opacity: 0, transform: 'translateX(200px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          enterFromLeft: {
            from: { opacity: 0, transform: 'translateX(-200px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          exitToRight: {
            from: { opacity: 1, transform: 'translateX(0)' },
            to: { opacity: 0, transform: 'translateX(200px)' },
          },
          exitToLeft: {
            from: { opacity: 1, transform: 'translateX(0)' },
            to: { opacity: 0, transform: 'translateX(-200px)' },
          },
          scaleIn: {
            from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
            to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          },
          scaleOut: {
            from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
            to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
          fadeOut: 'fadeOut 200ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideInFromRight: 'slideInFromRight 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideInFromLeft: 'slideInFromLeft 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideInFromTop: 'slideInFromTop 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideInFromBottom: 'slideInFromBottom 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          accordionDown: 'accordionDown 0.2s ease-out',
          accordionUp: 'accordionUp 0.2s ease-out',
          slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          enterFromLeft: 'enterFromLeft 250ms ease',
          enterFromRight: 'enterFromRight 250ms ease',
          exitToLeft: 'exitToLeft 250ms ease',
          exitToRight: 'exitToRight 250ms ease',
          scaleIn: 'scaleIn 200ms ease',
          scaleOut: 'scaleOut 200ms ease',
        },
      },
    },
  }
  
  module.exports = config
  