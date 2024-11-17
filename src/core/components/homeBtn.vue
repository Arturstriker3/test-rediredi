<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineProps } from "vue";

interface HomeBtnProps {
  name: string;
  quantity: number;
  route: string;
}

const props = defineProps<HomeBtnProps>();

const router = useRouter();

const navigate = () => {
  router.push(props.route);
};
</script>

<template>
  <button
    class="flex items-center h-14 border rounded-2xl py-4 pr-3 pl-5 cursor-pointer hover:brightness-90 transition-all"
    @click="navigate">
    <div class="flex w-1/3 justify-start text-text-primary font-medium text-base">
      <span>{{ props.name }}</span>
    </div>
    <div class="flex w-1/3 justify-start">
      <v-chip v-show="props.quantity > 0" class="h-7 min-w-10 flex justify-center items-center">
        <p class="text-center text-lg font-medium">{{ props.quantity }}</p>
      </v-chip>
    </div>
    <div class="flex w-1/3 justify-end">
      <Icon class="w-5 h-5 text-icon-secondary" icon="mdi:chevron-right" />
    </div>
  </button>
</template>