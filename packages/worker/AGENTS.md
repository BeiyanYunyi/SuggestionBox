# SuggestionBox Worker

This folder includes the worker-side code and admin panel frontend code for the SuggestionBox application.

## Tech Stack

- StyleX
- ESLint Antfu Config
- Vue 3
- Pinia
- Pinia Colada

## Commands

- `pnpm dev`: Start the development server
- `pnpm build`: Build the production bundle
- `pnpm lint`: Run ESLint

## Project Structure

- `src/server` is the backend for both SuggestionBox client and the admin panel.
- `src/admin` is the frontend for the SuggestionBox admin panel.

## StyleX

StyleX is an Atomic CSS-in-JS library. Write style in JavaScript, and it will be compiled to Atomic CSS at build time.

This project uses @stylex-extend/core and vue-macros to add StyleX support to Vue components. To define styles, use the `defineStyleX` macro and `v-stylex` custom directive:

```vue
<script setup>
const styles = defineStyleX({
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
})
</script>

<template>
  <div v-stylex="styles.container" />
</template>
```

Search `defineStyleX` in the codebase for more examples.
