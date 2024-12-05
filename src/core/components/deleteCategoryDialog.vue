<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useCategoriesStore } from "@/core/stores/categoriesStore";

const props = defineProps({
  categoryId: String,
});

const emit = defineEmits(["close"]);

const categoriesStore = useCategoriesStore();

const closeDialog = () => {
  emit("close");
};

const confirmDelete = async () => {
  try {
    await categoriesStore.deleteCategory(props.categoryId ?? "");
  } catch (error) {
    console.error("Erro ao deletar a categoria:", error);
  }
  closeDialog();
};
</script>

<template>
  <VCard class="!p-4" rounded="xl">
    <template #default>
      <div class="flex flex-col w-full h-full gap-4">
        <div class="flex justify-center items-center">
          <Icon
            class="w-20 h-20 text-alert-color text-center"
            icon="mdi:alert"
          />
        </div>
        <h3 class="h-6 text-alert-text-color font-semibold text-xl">
          Deseja excluir a categoria?
        </h3>
        <div class="h-20 text-base font-medium text-text-secondary">
          <p>
            Essa ação é irreversível e implica na exclusão das subcategorias
            vinculadas.
          </p>
          <p>Os produtos ligados a essa categoria não serão excluídos</p>
        </div>
        <div class="flex flex-row justify-between items-center h-11 mt-2">
          <VBtn
            :disabled="categoriesStore.isCategoriesServiceCall"
            @click="closeDialog"
            class="!bg-home-single-btn !text-icon-primary"
            height="44px"
            width="140px"
            rounded="xl"
            variant="text"
          >
            Cancelar
          </VBtn>
          <VBtn
            :disabled="categoriesStore.isCategoriesServiceCall"
            @click="confirmDelete"
            class="!bg-icon-primary !text-white"
            height="44px"
            width="140px"
            rounded="xl"
            variant="text"
          >
            Excluir
          </VBtn>
        </div>
      </div>
    </template>
  </VCard>
</template>