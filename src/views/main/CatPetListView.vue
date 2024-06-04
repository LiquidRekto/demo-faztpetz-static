<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'
import { MiscUtils } from '@/utils/misc.utils'
import { useDisplay } from 'vuetify';
import { ref } from 'yup';

const { t } = useI18n()

const display = useDisplay()
const rowColPair = computed(() => {
    return MiscUtils.getRowDisplayPair(display)
})
</script>
<template>
    <v-container>
        <v-col>
            <label class="text-h4 font-weight-bold">Mèo Cảnh</label>
        </v-col>
        <!--
        <v-row v-for="n in rowColPair!.count">
            <v-col class="text-center" v-for="n in rowColPair!.count" :cols="rowColPair!.colLength">
                <router-link to ="pet-detail">
                    <img width="300" class="rounded-xl pa-4" src="https://cdn.shopify.com/s/files/1/2668/1922/files/british-shorthair-1.jpg?v=1689089942"/>
                    <p class="text-h5 font-weight-bold text-red">Mèo Anh lông ngắn</p>
                    <p class="font-weight-bold">3.500.000đ</p>
                </router-link>
            </v-col>
        </v-row>
    -->
    <v-row>
            <v-col class="text-center" cols="3">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/05/3ea97456-meo-golden-thumb.jpeg"/>
                    <p class="text-h5 font-weight-bold text-red">Mèo Golden</p>
                    <p class="font-weight-bold">3.000.000đ</p>
            </v-col>
            <v-col class="text-center" cols="3">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://file.hstatic.net/200000159621/article/3.9__5__278779a3db4c4ef380cd59d09905c760_grande.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Mèo Anh lông ngắn</p>
                    <p class="font-weight-bold">3.000.000đ</p>
            </v-col>
            <v-col class="text-center" cols="3">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://cdn.eva.vn/upload/3-2022/images/2022-08-26/image7-1661495595-967-width1180height800.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Mèo Ba Tư</p>
                    <p class="font-weight-bold">3.000.000đ</p>
            </v-col>
            <v-col class="text-center" cols="3">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://www.catster.com/wp-content/uploads/2023/11/Bengal-cat-like-a-leopard-sneaks-Indoor_Alexander_Evgenyevich_Shutterstock-800x534.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Mèo Bengal</p>
                    <p class="font-weight-bold">3.000.000đ</p>
            </v-col>
        </v-row>
    </v-container>
</template>