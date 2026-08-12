<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { black, yellow } from '@/utils/colors.stylex'
import { fonts } from '@/utils/fonts.stylex'

const ticketNumber = ref('')
const router = useRouter()

const styles = defineStyleX({
  main: {
    minBlockSize: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    inlineSize: '100%',
    maxInlineSize: '36rem',
  },
  label: {
    color: black.text,
    fontFamily: fonts.interface,
    fontSize: '2rem',
    fontWeight: 600,
  },
  controls: {
    display: 'flex',
    gap: '0.75rem',
  },
  input: {
    flex: 1,
    minInlineSize: 0,
    padding: '0.75rem 1rem',
    borderColor: black.background,
    borderStyle: 'solid',
    borderWidth: '3px',
    backgroundColor: yellow.background,
    color: black.text,
    fontFamily: fonts.interface,
    fontSize: '1.25rem',
    outline: 'none',
  },
  button: {
    paddingInline: '1.5rem',
    border: 'none',
    backgroundColor: black.background,
    color: black.contrast,
    cursor: 'pointer',
    fontFamily: fonts.interface,
    fontSize: '1.25rem',
    fontWeight: 600,
  },
})

function openTicket() {
  const id = ticketNumber.value.trim().replace(/^#/, '').trim()
  if (!id)
    return

  router.push({ name: 'ticket', params: { id } })
}
</script>

<template>
  <main v-stylex="styles.main">
    <form v-stylex="styles.form" @submit.prevent="openTicket">
      <label v-stylex="styles.label" for="ticket-number">查询工单</label>
      <div v-stylex="styles.controls">
        <input
          id="ticket-number"
          v-model="ticketNumber"
          v-stylex="styles.input"
          name="ticket-number"
          placeholder="#TN-1111GpUb"
          autocomplete="off"
          autofocus
        >
        <button v-stylex="styles.button" type="submit">
          查询
        </button>
      </div>
    </form>
  </main>
</template>
