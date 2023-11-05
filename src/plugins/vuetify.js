/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#cd5c5c",
          secondary: '#f25050',
        },
      },
      dark: {
        colors: {
          primary: '#5b1a1a',
          secondary: '#2b0d0d',
        },
      },
    },
  },
})
