<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col sm="12" md="6" cols="12"></v-col>
            <v-col sm="12" md="6" cols="12">
                <v-list-item link
                    prepend-icon="user-plus">
                    <v-list-item-title>
                        {{ t('common.email') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item link
                    prepend-icon="phone">
                    <v-list-item-title>
                        {{ t('common.hotline') }}
                    </v-list-item-title>
                </v-list-item>

            </v-col>
        </v-row>
        <!-- Header -->
        <v-row>
            <RouterView>

            </RouterView>
        </v-row>
        <!-- Footer -->

        <v-row class="pa-4 mt-4 bg-orange">
            <v-col sm="12" md="6" cols="12">

            </v-col>
            <v-col sm="12" md="6" cols="12">
                <label>{{ t('common.contactInfo') }}</label>
                <v-list-item link
                    prepend-icon="user-plus">
                    <v-list-item-title>
                        {{ t('common.email') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item link
                    prepend-icon="phone">
                    <v-list-item-title>
                        {{ t('common.hotline') }}
                    </v-list-item-title>
                </v-list-item>
            </v-col>
        </v-row>
    </v-container>
</template>