<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { interfacePages } from '@/core/interface/interface';
import Header from '@/core/layout/Header.vue';

const route = useRoute();

const isRouteDefined = (path: string) => interfacePages.some(page => page.path === path);

const getShouldShowHeader = (path: string) => {
  const page = interfacePages.find(page => page.path === path);
  return page?.showHeader === true;
};

const shouldShowHeader = ref(false);

watch(() => route.path, (newPath: string) => {
  const routeDefined = isRouteDefined(newPath);
  shouldShowHeader.value = routeDefined && getShouldShowHeader(newPath);
}, { immediate: true });
</script>

<template>
  <div class="app-container">
    <Header v-if="shouldShowHeader" />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  height: 100svh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.content-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
</style>