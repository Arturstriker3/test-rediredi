<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
// import categoriesItem from '@/core/components/categoriesItem.vue';
import newSubCategory from '@/core/components/newSubCategory.vue';

interface Category {
  id: string;
  name: string;
}

const categoriesStore = useCategoriesStore();

const categoriesTotal = ref(0);
const categories = ref<Category[]>(categoriesStore.categories as Category[]);
// const userInput = ref('');

watch(
    () => categoriesStore.categories,
    (newCategories) => {
        categories.value = newCategories;
        categoriesTotal.value = newCategories.length;
    },
    { immediate: true }
);
</script>

<template>
    <main class="flex flex-col">
        <p class="text-icon-secondary text-base font-medium h-10">
            Adicione as subcategorias abaixo das categorias pai
        </p>
        <div v-if="!categoriesStore.isCategoriesServiceCall" class="flex flex-col gap-3">
            <v-expansion-panels v-for="category in categories" :key="category.id" >
                <v-expansion-panel rounded="lg">
                    <template #title>
                        <div class="flex items-center w-full">
                            <span class="flex w-full justify-start text-base font-medium">
                                {{ category.name }}
                            </span>
                        </div>
                    </template>
                    <v-expansion-panel-text>
                        <newSubCategory :childrenParent="category.id" />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        <div v-else >
            <div class="flex justify-center items-center h-32">
                <v-progress-circular color="icon-primary" indeterminate :size="124" :width="124"></v-progress-circular>
            </div>
        </div>
    </main>
</template>

<style>

.mdi-chevron-down {
    color: #DA3468;
}

.mdi-chevron-up {
    color: #DA3468;
}

</style>