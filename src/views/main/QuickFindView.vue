<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<template>
    <v-container>
        <v-row class="pt-4">
            <v-col cols="12">
                <label class="text-h4 font-weight-bold">Tìm Nhanh</label>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <label>Mức độ năng động mà bạn muốn cho thú cưng của mình</label>
                <v-slider show-ticks="always" :ticks="{0:'1', 100: '100'}"></v-slider>
            </v-col>
            <v-col cols="6">
                <label>Tầm giá thú cưng mà bạn muốn mua</label>
                <v-slider show-ticks="always" :ticks="{0:'1.000.000đ', 100: '20.000.000đ'}"></v-slider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <label>Bạn là người thiên hướng nào?</label>
                <v-slider show-ticks="always" :ticks="{0:'Nội', 100: 'Ngoại'}"></v-slider>
            </v-col>
            <v-col cols="6">
                <label>Mức độ tần suất bạn chăm sóc thú cưng của bạn</label>
                <v-slider show-ticks="always" :ticks="{0:'Hiếm khi', 100: 'Thường xuyên'}"></v-slider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn link to="quick-find-result" size="large" class="bg-orange text-white">Tìm</v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</template>