<script setup lang="ts">
import { ICategories } from '@/core/interfaces/categories.interface';
import { ref } from 'vue';
import editInput from '@/core/components/editInput.vue';

const props = defineProps({
    text: String,
    category: Object as () => ICategories,
});

const isMenuOpen = ref(false);
const isEditMode = ref(false);
const userInput = ref(props.text ?? '');

const changeToEditMode = () => {
    isMenuOpen.value = false;
    isEditMode.value = true;
};

const closeEditMode = () => {
    isMenuOpen.value = false;
    isEditMode.value = false;
    userInput.value = props.text ?? '';
};
</script>

<template>
    <div v-if="!isEditMode" class="flex flex-row items-center h-14 py-3 px-4 rounded-lg bg-categorie-item">
        <p class="flex w-1/2 justify-start">{{ text }}</p>
        <div class="flex w-1/2 justify-end">
            <VMenu class="rounded-xl" v-model="isMenuOpen" activator="parent" offset-y max-height="200" rounded>
                <template #activator="{ props }">
                    <VBtn v-bind="props" variant="text">
                        <Icon class="h-6 w-6 text-icon-primary" icon="mdi:dots-horizontal" />
                    </VBtn>
                </template>
                <VList>
                    <VListItem @click="changeToEditMode()" class="h-9">
                        <template #prepend>
                            <Icon class="text-icon-primary mr-2" icon="mdi:pencil" />
                        </template>
                        Renomear
                    </VListItem>
                    <VListItem class="h-9">
                        <template #prepend>
                            <Icon class="text-icon-primary mr-2" icon="mdi:delete" />
                        </template>
                        Excluir
                    </VListItem>
                </VList>
            </VMenu>
        </div>
    </div>
    <div v-else >
        <editInput class="w-full" v-model="userInput" :placeholder="props.text" @closeEdit="closeEditMode()" />
    </div>
</template>