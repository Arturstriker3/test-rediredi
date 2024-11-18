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
const inputPlaceholder = ref("Nova subcategoria");

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
    <button
        class="flex w-full items-center gap-2 h-11 pr-4 pl-6 py-3 rounded-full cursor-pointer bg-home-single-btn hover:brightness-90 transition-all"
        @click="newCategoryChildren" v-if="!isCreateMode">
        <div class="flex w-2/3 justify-start text-icon-primary font-medium text-base">
            <span class="font-medium text-base">Adicionar subcategorias</span>
        </div>
        <div class="flex w-1/3 justify-end">
            <Icon class="w-5 h-5 text-icon-primary" icon="mdi:plus" />
        </div>
    </button>
    <div v-else>
        <createSubCategoryInput class="w-full" v-model="userInput" :placeholder="inputPlaceholder"
            @closeEdit="closeEditMode()" @confirmUpdate="patchCategorie()" />
    </div>
</template>
