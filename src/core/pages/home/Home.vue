<script lang="ts" setup>
import homeBtn from '@/core/components/homeBtn.vue';
import homeSingleBtn from '@/core/components/homeSingleBtn.vue';
import { onMounted, ref, watch } from 'vue';
import { useCategoriesStore } from '@/core/stores/categoriesStore';
import { ICategories } from '@/core/interfaces/categories.interface';

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
  <main class="flex flex-col gap-6 px-4 pt-4">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold text-xl text-text-primary">Organize seu catálogo com categorias e subcategorias</h3>
        <p class="font-medium text-base text-text-secondary">Ao usar as categorias e subcategorias do catálogo, você
          ajuda seus clientes a encontrarem os produtos desejados.</p>
      </div>
    </div>
    <div v-if="categoriesTotal < 1" class="flex">
      <homeSingleBtn route="/categories" />
    </div>
    <div v-else class="flex flex-col gap-3">
      <homeBtn name="Categoria" :quantity="5" route="/categories" />
      <homeBtn name="Subcategorias" :quantity="0" route="/subcategories" />
    </div>
    <div>
      <ul>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
    </div>
  </main>
</template>