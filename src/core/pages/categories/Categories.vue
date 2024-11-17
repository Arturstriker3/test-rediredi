<script setup lang="ts">
import modelInput from '@/core/components/modelInput.vue';
import confirmBtn from '@/core/components/confirmBtn.vue';
import { ref } from 'vue';

const userInput = ref('');
</script>

<template>
    <main class="flex flex-col">
        <div class="flex flex-row items-center gap-2 w-full">
            <modelInput class="w-full" v-model="userInput" placeholder="Crie uma categoria" />
            <confirmBtn :hasInput="userInput.length > 0" :disabled="userInput.length < 1" @click="">
                Criar
            </confirmBtn>
        </div>
        <div class="flex flex-col gap-1 items-center justify-center mt-24">
            <h3 class="text-text-secondary font-semibold text-xl">Ainda não existem categorias criadas</h3>
            <p class="text-center text-icon-secondary text-lg font-medium h-10 px-8">Digite no campo acima as categorias
                que deseja criar</p>
        </div>
    </main>
</template>
