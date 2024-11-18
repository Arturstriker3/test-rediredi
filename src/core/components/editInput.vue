<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';
import editCategorieConfirmBtn from '@/core/components/editCategorieConfirmBtn.vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
import editCategoriesCancelBtn from '@/core/components/editCategoriesCancelBtn.vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: ""
    },
});

const categoriesStore = useCategoriesStore();

const emit = defineEmits(['update:modelValue', 'closeEdit', 'confirmUpdate']);

const onInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    emit('update:modelValue', input.value);
};

const onCancel = () => {
    emit('closeEdit');
};

const updateCategorie = () => {
    emit('confirmUpdate');
};
</script>


<template>
    <div class="relative w-full">
        <input type="text" :style="{ border: `1px solid var(--color-input-border)` }"
            class="py-3 px-4 h-14 w-full rounded-lg focus:outline-none text-base font-medium !text-text-primary"
            :placeholder="placeholder" :value="props.modelValue" @input="onInput" maxlength="50" />
        <div class="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-2 z-10">
            <editCategoriesCancelBtn @click="onCancel()" />
            <editCategorieConfirmBtn :isActive="!categoriesStore.isCategoriesServiceCall" @click="updateCategorie()" />
        </div>
    </div>
</template>
