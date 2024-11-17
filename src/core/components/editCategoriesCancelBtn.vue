<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
    (event: 'click'): void;
}>();
</script>

<template>
    <button @click="emit('click')"
        class="flex justify-center items-center rounded-3xl h-9 w-9 bg-home-single-btn cursor-pointer hover:brightness-90 transition-all">
        <Icon class="text-icon-primary h-5 w-5 " icon="mdi:close" />
    </button>
</template>