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
  <v-app>
    <div class="h-screen w-full flex flex-col">
      <Header v-if="shouldShowHeader" />
      <v-main>
        <div class="pt-4 pr-4 pl-4" >
          <router-view />
        </div>
      </v-main>
    </div>
  </v-app>
</template>