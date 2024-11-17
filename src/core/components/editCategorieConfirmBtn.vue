<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
    isActive: boolean;
}

const emit = defineEmits<{
    (event: 'click'): void;
}>();

defineProps<Props>();
</script>

<template>
    <button :class="[
        'flex justify-center items-center rounded-3xl h-9 w-9 transition-all',
        isActive ? 'bg-icon-primary cursor-pointer hover:brightness-90' : 'bg-btn-disabled cursor-auto',
    ]" :disabled="!isActive" @click="emit('click')">
        <Icon class="text-white h-5 w-5" icon="mdi:check" />
    </button>
</template>
