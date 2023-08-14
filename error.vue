<script setup lang="ts">
import type { NuxtError } from '#app'

// prevent reactive update when clearing error
const { error } = defineProps<{
  error: Partial<NuxtError>
}>()

const { t } = useI18n()
// add more custom status codes messages here
const errorCodes: Record<number, string> = {
  404: t('Sorry, we can\'t find that page'),
  500: t('Sorry, something went wrong'),
}

if (process.dev)
  console.error(error)

const defaultMessage = t('Something went wrong')
const subtitle = t('We\'re all about a healthy internet but sometimes broken URLs happen.')
const message = errorCodes[error.statusCode!] ?? error.message ?? defaultMessage
const showBack = error.statusCode === 404
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" />
  <NuxtLayout>
    <MainContent>
      <template #title>
        <span timeline-title-style>Error</span>
      </template>
      <slot>
        <div p5 grid gap-y-4>
          <div text-xl font-bold>
            {{ message }}
          </div>
          <div text-secondary>
            {{ subtitle }}
          </div>
          <NuxtLink
            v-if="showBack"
            :aria-label="$t('nav.back')"
            class="btn-text inline-flex flex-items-center -ml-5"
            @click="$router.go(-1)"
          >
            <span i-ri:arrow-left-line /> {{ $t('nav.back') }}
          </NuxtLink>
        </div>
      </slot>
    </MainContent>
  </NuxtLayout>
  <AriaAnnouncer />
</template>
