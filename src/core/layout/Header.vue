<script setup lang="ts">
import { ref } from 'vue';

const pageName = ref('Categorias');
</script>

<template>
    <header class="h-16">
        <div class="flex items-center justify-between h-full p-4">
            <div class="flex justify-start items-center w-1/3">
                <VBtn variant="text">
                    <Icon class="h-6 w-6 text-icon-primary " icon="mdi:arrow-left" />
                </VBtn>
            </div>
            
            <div class="flex justify-center items-center w-1/3">
                <p class="text-text-primary text-lg font-medium" >{{ pageName }}</p>
            </div>
            
            <div class="w-1/3"></div>
        </div>
    </header>
</template>
