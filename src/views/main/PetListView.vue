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
            <label class="text-h4 font-weight-bold">Chó Berger</label>
        </v-col>

        <v-row v-for="n in rowColPair.count">
            <v-col class="text-center" v-for="n in rowColPair.count" :cols="rowColPair.colLength">
                <router-link to ="pet-detail">
                    <img width="300" class="rounded-xl pa-4" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Berger</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>