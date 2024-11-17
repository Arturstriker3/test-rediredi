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
        class="flex items-center gap-2 h-11 pr-4 pl-6 py-3 rounded-full cursor-pointer bg-home-single-btn hover:brightness-90 transition-all"
        @click="navigate">
        <div class="flex justify-start text-icon-primary font-medium text-base">
            <span class="font-medium text-base">Criar categorias</span>
        </div>
        <div class="flex justify-end">
            <Icon class="w-5 h-5 text-icon-primary" icon="mdi:plus" />
        </div>
    </button>
</template>