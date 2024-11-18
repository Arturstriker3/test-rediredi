<script setup>
import { VExpansionPanels, VExpansionPanel, VIcon } from 'vuetify/components';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
</script>

<template>
    <main class="flex flex-col">
        <p class="text-icon-secondary text-base font-medium h-10">
            Adicione as subcategorias abaixo das categorias pai
        </p>
        <div class="flex flex-col gap-3">
            <v-expansion-panels>
                <v-expansion-panel rounded="lg">
                    <template #title>
                        <div class="flex items-center w-full">
                            <span class="flex w-full justify-start text-base font-medium">
                                Title
                            </span>
                        </div>
                    </template>
                    <v-expansion-panel-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                        labore voluptatibus!
                        Eaque cupiditate minima.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </main>
</template>

<style>

.mdi-chevron-down {
    color: #DA3468;
}

.mdi-chevron-up {
    color: #DA3468;
}

</style>