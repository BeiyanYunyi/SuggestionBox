<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import UserInfo from './UserInfo'

const route = useRoute()

const showHome = computed(() => route.name !== 'home')
const showAdmin = computed(() => route.name === 'home')

const styles = defineStyleX({
  header: {
    paddingBlock: '1rem',
    paddingInline: '1.5rem',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginInlineStart: 'auto',
  },
})
</script>

<template>
  <header v-stylex="styles.header">
    <nav v-stylex="styles.nav" aria-label="Primary navigation">
      <RouterLink v-if="showHome" to="/">
        Home
      </RouterLink>

      <div v-stylex="styles.actions">
        <RouterLink v-if="showAdmin" :to="{ name: 'admin', params: { page: 1 } }">
          Admin
        </RouterLink>
        <UserInfo />
      </div>
    </nav>
  </header>
</template>
