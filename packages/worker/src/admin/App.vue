<script setup lang="ts">
import { PiniaColadaDevtools } from '@pinia/colada-devtools'
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

const styles = defineStyleX({
  content: {
    flex: 1,
  },
})
</script>

<template>
  <AppHeader />

  <div v-stylex="styles.content">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <Suspense>
            <!-- 主要内容 -->
            <component :is="Component" />
            <!-- 加载中状态 -->
            <template #fallback>
              正在加载...
            </template>
          </Suspense>
        </Transition>
      </template>
    </RouterView>
  </div>

  <AppFooter />
  <PiniaColadaDevtools />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<style>
@import 'https://fonts.project-trans.org/ChillDINGothic/result.css';
</style>
