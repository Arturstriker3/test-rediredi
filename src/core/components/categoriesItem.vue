<script setup lang="ts">
import { ICategories } from '@/core/interfaces/categories.interface';

defineProps({
    text: String,
    category: Object as () => ICategories,
});
</script>

<template>
    <div class="flex flex-row items-center h-14 py-3 px-4 rounded-xl bg-categorie-item">
        <p class="flex w-1/2 justify-start">{{ text }}</p>
        <div class="flex w-1/2 justify-end">
            <VBtn variant="text">
                <Icon class="h-6 w-6 text-icon-primary" icon="mdi:dots-horizontal" />
            </VBtn>
        </div>
    </div>
</template>
