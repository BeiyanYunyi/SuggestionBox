<script setup lang="ts">
import { RouterLink } from 'vue-router'

const styles = defineStyleX({
  footer: {
    paddingBlock: '1rem',
    paddingInline: '1.5rem',
    textAlign: 'center',
  },
})
</script>

<template>
  <footer v-stylex="styles.footer">
    <RouterLink to="/about">
      About
    </RouterLink>
  </footer>
</template>
