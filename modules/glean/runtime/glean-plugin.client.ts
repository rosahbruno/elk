import Glean from '@mozilla/glean/web'
import * as log from 'tauri-plugin-log-api'

import { load } from '../../../telemetry/generated/page'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    log.info('Glean: App Mounted, start initing glean')

    Glean.initialize('mozilla-social.elk', true, {})

    // Debugging
    Glean.setLogPings(true)
    Glean.setDebugViewTag('bruno-social')
  })

  nuxtApp.hook('page:finish', () => {
    log.info('Glean: Page finished, sending page event')

    load.record()
  })
})
