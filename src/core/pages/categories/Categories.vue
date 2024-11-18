<script setup lang="ts">
import modelInput from '@/core/components/modelInput.vue';
import confirmBtn from '@/core/components/confirmBtn.vue';
import { ref, watch } from 'vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
import { ICategories } from '@/core/interfaces/categories.interface';
import categoriesItem from '@/core/components/categoriesItem.vue';

const categoriesStore = useCategoriesStore();

const categoriesTotal = ref(0);
const categories = ref<ICategories[]>(categoriesStore.categories);
const userInput = ref('');

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
        <div class="flex flex-row items-center gap-2 w-full">
            <modelInput :disabled="categoriesStore.isCategoriesServiceCall" class="w-full" v-model="userInput" placeholder="Crie uma categoria" />
            <confirmBtn :hasInput="userInput.length > 0" :disabled="userInput.length < 1 || categoriesStore.isCategoriesServiceCall" @click="">
                Criar
            </confirmBtn>
        </div>
        <div class="mt-4" v-if="!categoriesStore.isCategoriesServiceCall">
            <div v-if="categoriesTotal < 1" class="flex flex-col gap-1 items-center justify-center mt-20">
                <h3 class="text-text-secondary font-semibold text-xl">Ainda não existem categorias criadas</h3>
                <p class="text-center text-icon-secondary text-lg font-medium h-10 px-8">Digite no campo acima as
                    categorias
                    que deseja criar</p>
            </div>
            <div v-else>
                <categoriesItem v-for="category in categories" :key="category.id" :text="category.name"
                    :category="category" />
            </div>
        </div>
        <div v-else>
            <div class="flex justify-center items-center h-32">
                <v-progress-circular color="icon-primary" indeterminate :size="124" :width="124"></v-progress-circular>
            </div>
        </div>
    </main>
</template>
