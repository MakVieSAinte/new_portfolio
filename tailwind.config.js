/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // 'node_modules/preline/dist/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: '#CAD4E7',
        myblack: 'oklch(20.5% 0 0)',
        bordure: '#757575',
        accent: {
          DEFAULT: '#005FB8',
          secondary: '#60CDFF',
        },
      },   
      fontFamily: {
        familjen_grotesk: ['Familjen Grotesk'],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.gray.800'),
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              color: theme('colors.gray.800'),
              fontWeight: '700',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h3: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },
            code: {
              color: theme('colors.gray.800'),
              backgroundColor: theme('colors.slate.100'),
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.100'),
              borderRadius: '0.5rem',
              overflowX: 'auto',
              padding: '1rem',
              border: `1px solid ${theme('colors.gray.700')}`,
            },
            blockquote: {
              padding: '1rem',
              borderLeftColor: theme('colors.primary'),
              fontStyle: 'italic',
            },
            ul: {
              listStyleType: 'disc',
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: theme('boxShadow.sm'),
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'), // Plus clair pour une meilleure lisibilité
            a: {
              color: theme('colors.primary'),
            },
            h1: {
              color: theme('colors.white'),
              fontWeight: '700',
              fontSize: '2rem',
            },
            h2: {
              color: theme('colors.white'),
              fontWeight: '700',
              fontSize: '1.5rem',
            },
            h3: {
              color: theme('colors.gray.100'),
              fontWeight: '600',
              fontSize: '1.25rem',
            },
            h4: {
              color: theme('colors.gray.100'),
              fontWeight: '600',
              fontSize: '1.125rem',
            },
            strong: {
              color: theme('colors.gray.100'), // Texte en gras plus visible
            },
            em: {
              color: theme('colors.gray.100'), // Texte en italique plus visible
            },
            p: {
              color: theme('colors.gray.200'), // Paragraphes plus lisibles
            },
            ul: {
              color: theme('colors.gray.200'), // Listes plus lisibles
            },
            ol: {
              color: theme('colors.gray.200'), // Listes ordonnées plus lisibles
            },
            li: {
              color: theme('colors.gray.200'), // Éléments de liste plus lisibles
            },
            code: {
              color: theme('colors.primary'),
              backgroundColor: theme('colors.neutral.800'),
            },
            pre: {
              color: theme('colors.gray.100'), // Texte dans les blocs de code plus visible
              backgroundColor: theme('colors.gray.900'),
              border: `1px solid ${theme('colors.neutral.800')}`,
            },
            blockquote: {
              padding: '1rem',
              color: theme('colors.gray.200'), // Citations plus lisibles
            },
            figcaption: {
              color: theme('colors.gray.400'), // Légendes légèrement plus sombres
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('preline/plugin'),
  ],
}
