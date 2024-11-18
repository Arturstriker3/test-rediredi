<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineProps } from "vue";

interface HomeBtnProps {
    route: string;
}

const props = defineProps<HomeBtnProps>();

const router = useRouter();

const navigate = () => {
    router.push(props.route);
};
</script>

<template>
    <button
        class="flex w-full items-center gap-2 h-11 pr-4 pl-6 py-3 rounded-full cursor-pointer bg-home-single-btn hover:brightness-90 transition-all"
        @click="navigate">
        <div class="flex w-2/3 justify-start text-icon-primary font-medium text-base">
            <span class="font-medium text-base">Adicionar subcategorias</span>
        </div>
        <div class="flex w-1/3 justify-end">
            <Icon class="w-5 h-5 text-icon-primary" icon="mdi:plus" />
        </div>
    </button>
</template>