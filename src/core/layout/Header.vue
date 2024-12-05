<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { interfacePages } from '@/core/interface/interface';

const pageName = ref('Categorias');
const router = useRouter();

const showBackButton = ref(false);

const findPageName = (path: string) => {
    const page = interfacePages.find((page) => page.path === path);
    return page ? page.name : 'Página Desconhecida';
};

watch(() => router.currentRoute.value.path, (newPath) => {
    if (newPath === '/') {
        pageName.value = 'Categorias';
    } else {
        pageName.value = findPageName(newPath);
    }

    showBackButton.value = newPath !== '/';
});

const navigateHome = () => {
    router.push('/');
};
</script>

<template>
    <header class="h-16">
        <div class="flex items-center justify-between h-full p-4">
            <div class="flex justify-start items-center w-1/3">
                <VBtn v-if="showBackButton" @click="navigateHome" variant="text">
                    <Icon class="h-6 w-6 text-icon-primary" icon="mdi:arrow-left" />
                </VBtn>
            </div>
            <div class="flex justify-center items-center w-1/3">
                <p class="text-text-primary text-lg font-medium">{{ pageName }}</p>
            </div>
            <div class="w-1/3"></div>
        </div>
        <div class="border-bottom"></div>
    </header>
</template>

<style scoped>
.border-bottom {
    height: 0.5px;
    background-color: var(--color-border-color);
}
</style>