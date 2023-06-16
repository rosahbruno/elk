<script setup lang="ts">
const userSettings = useUserSettings()
const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <footer p4 text-sm text-secondary-light flex="~ col">
    <div flex="~ gap2" items-center mb4>
      <CommonTooltip :content="$t('nav.toggle_theme')">
        <button flex i-ri:sun-line dark-i-ri:moon-line text-lg :aria-label="$t('nav.toggle_theme')" @click="toggleDark()" />
      </CommonTooltip>
      <CommonTooltip :content="$t('nav.zen_mode')">
        <button
          flex
          text-lg
          :class="getPreferences(userSettings, 'zenMode') ? 'i-ri:layout-right-2-line' : 'i-ri:layout-right-line'"
          :aria-label="$t('nav.zen_mode')"
          @click="togglePreferences('zenMode')"
        />
      </CommonTooltip>
    </div>
    <div>
      <NuxtLink href="https://mozilla.social/privacy-policy" target="_blank" external>
        Privacy Policy
      </NuxtLink>
      &middot;
      <NuxtLink href="https://mozilla.social/terms" target="_blank" external>
        Terms of Service
      </NuxtLink>
    </div>
  </footer>
</template>
