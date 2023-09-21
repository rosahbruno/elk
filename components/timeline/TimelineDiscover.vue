<script setup lang="ts">
import type { Recommendation } from '../composables/recommendations'
import { getLanguageForRecs } from '../../utils/language'

const { locale: lang } = useI18n()
const locale = getLanguageForRecs(lang.value)

const recommendations: Recommendation[] = await $fetch(`/api/recommendations?locale=${locale}`)

// console.log({ recommendations })
</script>

<template>
  <div>
    Coming soon...
  </div>
</template>
