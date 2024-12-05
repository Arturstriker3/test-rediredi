<script setup lang="ts">
import { defineProps } from "vue";

interface HomeBtnProps {
  name: string;
  quantity: number;
}

const props = defineProps<HomeBtnProps>();
</script>

<template>
  <button
    class="flex items-center h-14 border rounded-2xl py-4 pr-3 pl-5 cursor-wait">
    <div class="flex w-1/3 justify-start text-text-primary font-medium text-base">
      <v-skeleton-loader class="h-6 w-20" />
    </div>
    <div class="flex w-1/3 justify-start">
      <v-chip v-show="props.quantity > 0" class="h-7 min-w-10 flex justify-center items-center">
        <v-skeleton-loader class="h-8 w-2" />
      </v-chip>
    </div>
    <div class="flex w-1/3 justify-end">
      <v-skeleton-loader class="w-5 h-5" />
    </div>
  </button>
</template>