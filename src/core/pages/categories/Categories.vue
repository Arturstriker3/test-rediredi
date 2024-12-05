<script setup lang="ts">
import modelInput from '@/core/components/modelInput.vue';
import confirmBtn from '@/core/components/confirmBtn.vue';
import { ref, watch } from 'vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
import { ICategories } from '@/core/interfaces/categories.interface';
import categoriesItem from '@/core/components/categoriesItem.vue';
import homeBtnSkeleton2 from '@/core/components/loaders/homeBtnSkeleton2.vue';

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

const createNewCategory = async () => {
    try {
        await categoriesStore.createCategory(userInput.value);
        userInput.value = '';
    } catch (error) {
        console.error('Erro ao criar a categoria:', error);
    }
}
</script>

<template>
    <main class="flex flex-col ">
        <div class="flex flex-row items-center gap-2 w-full">
            <modelInput :disabled="categoriesStore.isCategoriesServiceCall" class="w-full" v-model="userInput"
                placeholder="Crie uma categoria" />
            <confirmBtn :hasInput="userInput.length > 0"
                :disabled="userInput.length < 1 || categoriesStore.isCategoriesServiceCall"
                @click="createNewCategory()">
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
            <div class="flex flex-col gap-2" v-else>
                <categoriesItem v-for="category in categories" :key="category.id" :text="category.name"
                    :category="category" />
            </div>
        </div>
        <div v-else >
            <div class="mt-4 flex flex-col gap-3">
                <homeBtnSkeleton2 v-for="n in Math.max(categoriesTotal, 1)" :key="n" />
            </div>
        </div>
    </main>
</template>
