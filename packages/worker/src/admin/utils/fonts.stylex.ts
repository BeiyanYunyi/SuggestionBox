import { defineVars } from '@stylexjs/stylex'

const systemSans = 'ui-sans-serif, system-ui, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\''

export const fonts = defineVars({
  interface: `ChillDINGothic, ${systemSans}`,
  userContent: systemSans,
})
