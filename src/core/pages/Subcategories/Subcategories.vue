<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
// import categoriesItem from '@/core/components/categoriesItem.vue';
import newSubCategory from '@/core/components/newSubCategory.vue';
import homeBtnSkeleton2 from '@/core/components/loaders/homeBtnSkeleton2.vue';

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

const getSubCategories = async (id: string) => {
    console.log(id);
    // try {
    //     await categoriesStore.getSubCategories(id);
    // } catch (error) {
    //     console.log(error);
    // }
}

</script>

<template>
    <main class="flex flex-col">
        <p class="text-icon-secondary text-base font-medium h-10">
            Adicione as subcategorias abaixo das categorias pai
        </p>
        <div v-if="!categoriesStore.isCategoriesServiceCall" class="flex flex-col gap-3">
            <v-expansion-panels v-for="category in categories" :key="category.id" >
                <v-expansion-panel class="border" @click="getSubCategories(category.id)" rounded="lg">
                    <template #title>
                        <div class="flex items-center w-full">
                            <span class="flex w-full justify-start text-base text-text-primary font-semibold">
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
            <div class="flex flex-col gap-3">
                <homeBtnSkeleton2 v-for="n in Math.max(categoriesTotal, 1)" :key="n" />
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

.v-expansion-panel__shadow {
  box-shadow: none !important;
}

</style>