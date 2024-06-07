<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<template>
    <v-container>
        <v-row class="pa-4">
            <v-col sm="12" md="6" cols="6">
                <p class="text-h3 font-weight-bold">Liên hệ</p>
            </v-col>
            <v-col sm="12" md="6" cols="6">
                <v-row>
                    <v-col cols="12">
                        <p>Website: faztpetz.com.vn</p>
                    </v-col>
                    <v-col cols="12">
                        <p>SĐT: 0985359339</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>