import { defineStore } from 'pinia';
import categoriesService from '@/core/services/categories';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
    isCategoriesServiceCall: false,
  }),

  actions: {
    async getCategories() {
      this.isCategoriesServiceCall = true;
      try {
        const response = await categoriesService.get();
        this.categories = response.data;
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        throw new Error('Falha ao carregar categorias');
      } finally {
        this.isCategoriesServiceCall = false;
      }
    },
  },

  getters: {
    categoriesCount(state) {
      return state.categories.length || 0;
    },
  },
});
