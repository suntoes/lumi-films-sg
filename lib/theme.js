import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('white', 'black')(props),
      fontFamily: `"Neue-Haas-Unica", sans-serif`
    },
    '@font-face': {
      fontFamily: 'Neue-Haas-Unica',
      fontWeight: 400,
      src: `url("/fonts/NeueHaasUnicaPro-Regular.ttf") format('truetype')`
    }
  })
}

const components = {
  Heading: {
    sizes: {
      xs: { fontSize: 20 },
      sm: { fontSize: 32 },
      md: { fontSize: 48 },
      lg: { fontSize: 64 },
      xl: { fontSize: 84 }
    }
  },
  Button: {
    variants: {
      teal: {
        display: 'block',
        width: 'fit-content',
        paddingX: 25,
        fontSize: 'sm',
        fontWeight: 400,
        backgroundColor: 'teal',
        color: 'white',
        borderRadius: 25,
        filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))',
        _hover: {
          opacity: 0.6
        }
      }
    }
  },
  Link: {
    baseStyle: {
      textUnderlineOffset: 3
    }
  }
}

const colors = {
  white: '#eeeeee',
  black: '#222222',
  teal: '#2a7a98'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, components, styles, colors })
export default theme
