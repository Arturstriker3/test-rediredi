<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    variant: {
        type: String as () => 'tonal' | 'flat' | 'text' | 'elevated' | 'outlined' | 'plain',
        default: 'tonal',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    hasInput: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <v-btn class="!h-11 !w-20 !px-6 !py-3" :variant="variant" :disabled="disabled" :class="{
        '!bg-btn-activated !text-white': !disabled && hasInput,
        '!bg-btn-disabled !text-icon-secondary': disabled || !hasInput
    }" rounded="xl" :style="{
        opacity: disabled || !hasInput ? '0.6' : '1',
        pointerEvents: disabled || !hasInput ? 'none' : 'auto'
    }">
        <slot>Confirmar</slot>
    </v-btn>
</template>
