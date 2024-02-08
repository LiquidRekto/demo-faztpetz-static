<script setup lang="ts">
import ParagraphText from '@/components/text/ParagraphText.vue';
import UppercaseText from '@/components/text/UppercaseText.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<template>
    <v-container v-fluid>
        <v-row class="justify-center text-center">
            <v-col cols="12">
                <p class="text-h4 font-weight-bold">
                    <UppercaseText>
                        {{ t('common.registerAccount') }}
                    </UppercaseText>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="12" md="6" cols="12">
                <ParagraphText class="text-h6">
                    {{ t('common.formInputs.fullName') }}
                </ParagraphText>
                <v-text-field>
                </v-text-field>
            </v-col>
            <v-col sm="12" md="6" cols="12">
                <ParagraphText class="text-h6">
                    {{ t('common.formInputs.gender') }}
                </ParagraphText>
                <v-select :placeholder="`${t('common.inputPlaceholder.chooseGender')}...`"
                    :items="[t('common.gender.male'), t('common.gender.female'),t('common.gender.other')]"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="12" md="6" cols="12">
                <ParagraphText class="text-h6">
                    {{ t('common.formInputs.dob') }}
                </ParagraphText>
                <v-text-field>
                </v-text-field>
            </v-col>
            <v-col sm="12" md="6" cols="12">
                <ParagraphText class="text-h6">
                    {{ t('common.formInputs.major') }}
                </ParagraphText>
                <v-text-field>
                </v-text-field>
            </v-col>
        </v-row>

    </v-container>
</template>