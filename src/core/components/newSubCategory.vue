<script setup lang="ts">
import { defineProps, ref } from "vue";
import createSubCategoryInput from "@/core/components/createSubCategoryInput.vue";
import { useCategoriesStore } from "@/core/stores/categoriesStore";

interface NewSubCategory {
    childrenParent: string;
}

const props = defineProps<NewSubCategory>();

const categoriesStore = useCategoriesStore();

const isCreateMode = ref(false);
const userInput = ref("");
const inputPlaceholder = ref("Adicionar subcategoria");

const newCategoryChildren = () => {
    userInput.value = "";
    isCreateMode.value = true;
};

const closeEditMode = () => {
    isCreateMode.value = false;
};

const patchCategorie = async () => {
    try {
        closeEditMode()
        await categoriesStore.createSubCategory(userInput.value, props.childrenParent);
    } catch (error) {
        console.error('Erro ao criar a subcategoria:', error);
    }
};
</script>

<template>
    <div @click="newCategoryChildren" v-if="!isCreateMode" class="flex flex-row items-center h-14 py-3 px-4 cursor-pointer rounded-lg bg-categorie-item">
        <div class="flex w-2/3 justify-start">
            <p class="text-icon-primary font-medium text-base" >{{ inputPlaceholder }}</p>
        </div>
        <div class="flex w-1/3 justify-end">
            <Icon class="w-5 h-5 text-icon-primary" icon="mdi:plus" />
        </div>
    </div>
    <div v-else>
        <createSubCategoryInput class="w-full" v-model="userInput" placeholder=""
            @closeEdit="closeEditMode()" @confirmUpdate="patchCategorie()" />
    </div>
</template>
