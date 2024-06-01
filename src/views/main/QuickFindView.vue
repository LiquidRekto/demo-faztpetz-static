<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <label class="text-h4 font-weight-bold">Tìm Nhanh</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <label>Mức độ năng động mà bạn muốn cho thú cưng của mình</label>
                <v-slider></v-slider>
            </v-col>
            <v-col cols="6">
                <label>Mức độ năng động mà bạn muốn cho thú cưng của mình</label>
                <v-slider></v-slider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <label>Bạn là người thiên hướng nào?</label>
                <v-slider></v-slider>
            </v-col>
            <v-col cols="6">
                <label>Mức độ tần suất bạn chăm sóc thú cưng của bạn</label>
                <v-slider></v-slider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn link to="quick-find-result" size="large" class="bg-orange text-white">Tìm</v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</template>