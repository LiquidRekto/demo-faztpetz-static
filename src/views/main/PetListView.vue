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
            <label class="text-h4 font-weight-bold">Chó Cảnh</label>
        </v-col>
        <!--
        <v-row v-for="n in rowColPair!.count">
            <v-col class="text-center" v-for="n in rowColPair!.count" :cols="rowColPair!.colLength">
                <router-link to ="pet-detail">
                    <img width="300" class="rounded-xl pa-4" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Berger</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
        </v-row>
    -->
        <v-row>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Berger</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://www.dogster.com/wp-content/uploads/2024/02/red-toy-poodle-dog-at-the-park_Mykhaylo_Kozelko_Shutterstock.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Poodle</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://cdn-i.vtcnews.vn/resize/th/upload/2023/05/19/image2-1660288537-793-width2048height1622-08571053.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Pitbull</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://ilovemychi.com/wp-content/uploads/2018/12/white-tan-chi-pooping-700.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Chihuahua</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://cdn.tgdd.vn/Files/2021/04/14/1343203/cach-nuoi-cho-phoc-dung-ky-thuat-ma-ban-can-biet-202203281135392884.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Phốc</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://cdn.tgdd.vn/Files/2021/10/11/1389578/cho-beagle-la-giong-cho-gi-nhung-dieu-ban-nen-biet-ve-cho-beagle-202110112336020335.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Beagle</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
            <v-col class="text-center" cols="3">
                <router-link to ="pet-detail">
                    <img width="300" height="200" class="rounded-xl pa-4" src="https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Dachshund</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>