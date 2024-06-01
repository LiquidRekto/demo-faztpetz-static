<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="6">
                <v-row class="pa-4">
                    <v-col>
                        <label class="text-h4 font-weight-bold">Kết quả</label>
                    </v-col>
                </v-row>
                <v-row class="pa-4">
                    <v-col>
                        <label class="text-h6 text-red font-weight-bold">Chó Berger sẽ phù hợp nhất với bạn!</label>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="6">
                        <img width="500" class="rounded-xl"
                            src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-end">
                        <v-btn size="large" class="bg-orange text-white">Mua ngay!</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>