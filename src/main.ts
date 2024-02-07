import { createApp } from 'vue'

// Misc
import router from './router'
import '@/styles/main.scss'
//

// Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//

// FontAwesome imports
import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
//

// Vue i18n imports
import { createI18n, type Locale, type Path } from 'vue-i18n'
import EN from './translations/en.json'
import VI from './translations/vi.json'
//

import App from './App.vue'
import { GeolocationUtils } from './utils/geolocation.utils'
import { StorageUtils } from './utils/storage.utils'

const app = createApp(App)

// Add theme
// initialize theme
const fpTutorTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-2': '#AAAAAA',
    primary: '#FF00FF',
    'primary-darken-1': '#FF00FF',
    anchor: '#000000',
    secondary: '#000000',
    'secondary-darken-1': '#000000',
    error: 'AA0000',
    info: '#2222FF',
    success: '#00AA00',
    warning: '#AAAA00'
  }
}


// Add vuetify
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'fpTutorTheme',
    themes: {
      fpTutorTheme
    }
  },
  defaults: {
    VTextField: {
      variant: 'outlined',
      density: 'compact',
      'center-affix': true
    },

  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },

    components: components,
    directives: directives
})

app.use(vuetify)
//


// Add i18n
const messages = {
  EN: EN,
  VI: VI
}

let locale = StorageUtils.getItem("locale") ? StorageUtils.getItem("locale") : GeolocationUtils.getSuitableDisplayLocale(messages)

const i18n = createI18n({
    locale: locale,
    legacy: false,
    messages: messages,
    missing: (text: Locale, key: Path) => {
      console.warn(`vue-i18n: MISSING TRANSLATION FOR ${text}: ${key}`)
      return `MISSING TRANSLATION FOR ${text}: ${key}`
    }
  })

app.use(i18n)
//

// Font awesome
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
library.add(far)
library.add(fab)
//

app.use(router)

app.mount('#app')
