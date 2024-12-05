<script lang="ts" setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const isFocused = ref(false);

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};

const onFocus = () => {
  if (!props.disabled) {
    isFocused.value = true;
  }
};

const onBlur = () => {
  isFocused.value = false;
};
</script>

<template>
  <div>
    <input
      type="text"
      :style="{
        border: `1px solid ${
          props.disabled
            ? 'var(--color-input-border-disabled)'
            : isFocused
            ? 'var(--color-input-border )'
            : 'var(--color-input-border-disabled)'
        }`,
      }"
      class="py-3 p-4 h-11 w-full rounded-full focus:outline-none text-base font-medium text-icon-secondary"
      :placeholder="placeholder"
      :value="props.modelValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      :disabled="props.disabled"
      maxlength="30"
    />
  </div>
</template>
