import { merge } from "lodash"
import "typeface-roboto-condensed"
import { roboto } from "@theme-ui/presets"
// Supports dark mode colors.
import prism from "@theme-ui/prism/presets/theme-ui"

export default merge(roboto, {
  useColorSchemeMediaQuery: true,
  initialColorMode: `light`,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    // Red
    // secondary: '#d73a49',
    secondary: '#ffa12e',
    accent: '#a719d2',
    gray: '#777',
    heading: '#666',
    muted: '#aaa',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        muted: '#222',
        accent: '#ce68ed',
        // secondary: '#de5e6b',
        secondary: '#ff9e24',
      }
    },
  },
  fonts: {
    heading: 'Roboto Condensed, Helvetica Neue, sans-serif',
  },
  fontWeights: {
    heading: 300,
  },
  sizes: {
    container: 672,
  },
  styles: {
    blockquote: {
      paddingLeft: 3,
      marginLeft: 0,
      borderLeftWidth: 2,
      borderLeftStyle: 'solid',
      borderLeftColor: 'muted',
    },
    code: {
      padding: 3,
      ...prism,
    },
    hr: {
      borderStyle: 'solid',
      borderColor: 'muted',
    },
    ul: {
      listStyle: 'square',
    },
    h1: {
      color: 'heading',
    },
    h2: {
      color: 'heading',
    },
    h3: {
      color: 'heading',
    },
    h4: {
      color: 'heading',
    },
    h5: {
      color: 'heading',
    },
    h6: {
      color: 'heading',
    },
  },
})
