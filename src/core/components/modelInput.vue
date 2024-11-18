<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    emit('update:modelValue', input.value);
};
</script>

<template>
    <div>
        <input type="text" :style="{ border: `1px solid var(--color-input-border)` }"
            class="py-3 p-4 h-11 w-full rounded-full focus:outline-none text-base font-medium text-icon-secondary"
            :placeholder="placeholder" :value="props.modelValue" @input="onInput" :disabled="props.disabled"
            maxlength="50" />
    </div>
</template>