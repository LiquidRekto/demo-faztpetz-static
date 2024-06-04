<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CommonUtils } from '@/utils/common.utils';

const { t } = useI18n()

const addCart = () => {
    CommonUtils.addToCart({id: 1, name: "Hi", count: 2})
}
</script>
<template>
    <v-container>
        <v-row class="pa-4">
            <v-col class="text-center" cols="6">
                <img width="500" class="rounded-xl" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"/>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="12">
                        <p class="text-h3 font-weight-bold">Chó Berger</p>
                    </v-col>
                    <v-col cols="12">
                        <p class="text-h5 font-weight-bold text-gray">Đơn giá: <span class="text-red">3.000.000đ</span></p>
                    </v-col>
                    <v-col cols="12">
                        <v-btn @click="addCart" size="large" class="bg-orange text-white">Mua ngay!</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>