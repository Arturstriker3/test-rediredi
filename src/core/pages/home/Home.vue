<script lang="ts" setup>
import homeBtn from '@/core/components/homeBtn.vue';
import homeSingleBtn from '@/core/components/homeSingleBtn.vue';
import { onMounted, ref, watch } from 'vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
import { ICategories } from '@/core/interfaces/categories.interface';
import homeBtnSkeleton2 from '@/core/components/loaders/homeBtnSkeleton2.vue';

const categoriesStore = useCategoriesStore();

const categoriesTotal = ref(0);
const categories = ref<ICategories[]>(categoriesStore.categories);

const loadCategories = async () => {
  try {
    await categoriesStore.getCategories();
  } catch (error) {
    console.error('Erro ao carregar categorias:', error);
  }
};

watch(
  () => categoriesStore.categories,
  (newCategories) => {
    categories.value = newCategories;
    categoriesTotal.value = newCategories.length;
  },
  { immediate: true }
);

onMounted(() => {
  loadCategories();
});
</script>

<template>
  <main class="flex flex-col gap-6">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold text-xl text-alert-text-color">Organize seu catálogo com categorias e subcategorias</h3>
        <p class="font-medium text-base text-text-secondary">Ao usar as categorias e subcategorias do catálogo, você
          ajuda seus clientes a encontrarem os produtos desejados.</p>
      </div>
    </div>
    <div v-if="!categoriesStore.isCategoriesServiceCall">
      <div v-if="categoriesTotal < 1" class="flex">
        <homeSingleBtn route="/categories" />
      </div>
      <div v-else class="flex flex-col gap-3">
        <homeBtn name="Categorias" :quantity="categoriesTotal" route="/categories" />
        <homeBtn name="Subcategorias" :quantity="0" route="/subcategories" />
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col gap-3">
        <homeBtnSkeleton2 />
        <homeBtnSkeleton2 />
      </div>
    </div>
  </main>
</template>