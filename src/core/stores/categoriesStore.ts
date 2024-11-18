import { defineStore } from "pinia";
import categoriesService from "@/core/services/categories";

export const useCategoriesStore = defineStore("categories", {
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
        console.error("Erro ao buscar categorias:", error);
        throw new Error("Falha ao carregar categorias");
      } finally {
        this.isCategoriesServiceCall = false;
      }
    },

    async updateCategory(newName: string, categoryId: string) {
      this.isCategoriesServiceCall = true;
      try {
        await categoriesService.patch(newName, categoryId);
      } catch (error) {
        console.error("Erro ao atualizar a categoria:", error);
        throw new Error("Falha ao atualizar a categoria");
      } finally {
        this.getCategories();
      }
    },
  },

  getters: {
    categoriesCount(state) {
      return state.categories.length || 0;
    },
  },
});
