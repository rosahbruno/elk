<script setup>
const { busy, oauth, singleInstanceServer } = useSignIn()
</script>

<template>
  <VDropdown v-if="isHydrated && currentUser" sm:hidden>
    <div style="-webkit-touch-callout: none;">
      <AccountAvatar
        :account="currentUser.account"
        h-8
        w-8
        :draggable="false"
        square
      />
    </div>

    <template #popper="{ hide }">
      <UserSwitcher @click="hide()" />
    </template>
  </VDropdown>
  <template v-else>
    <button
      v-if="singleInstanceServer"
      flex="~ row"
      gap-x-1 items-center justify-center btn-solid text-sm px-2 py-1 xl:hidden
      :disabled="busy"
      @click="oauth()"
    >
      {{ $t('action.sign_in') }}
    </button>
    <button v-else btn-solid text-sm px-2 py-1 text-center xl:hidden @click="openSigninDialog()">
      {{ $t('action.sign_in') }}
    </button>
  </template>
</template>
