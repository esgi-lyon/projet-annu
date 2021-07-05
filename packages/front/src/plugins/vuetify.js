import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdiSvg', // default - only for display purposes
  },
  theme: {
    light: {
      primary: colors.blue,
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
      background: colors.grey.lighten8,
    },
    dark: {
      primary: colors.blue,
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
      background: colors.grey.darken4,
    },
  },
})
