<script lang="ts" setup>
import homeBtn from '@/core/components/homeBtn.vue';

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
    <div class="flex flex-col gap-3">
      <homeBtn name="Categoria" :quantity="5" route="/categories" />
      <homeBtn name="Subcategorias" :quantity="0" route="/subcategories" />
    </div>
  </main>
</template>