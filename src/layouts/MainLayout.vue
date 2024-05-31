<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import ParagraphText from '@/components/text/ParagraphText.vue'
import UppercaseText from '@/components/text/UppercaseText.vue'
import Header from '@/components/common/Header.vue'

const { t } = useI18n()

const items = [
    { title: t('common.registerBtn.learner'), link: 'register-learner', icon: "fa-user-graduate" },
    { title: t('common.registerBtn.tutor'), link: 'register-tutor', icon: "fa-chalkboard-user" },
]
</script>
<template>
    <v-container style="min-height: 100vh" fluid class="d-flex flex-column pa-0">
        <header>
            <!--
            <v-row class="pa-4 bg-yellow justify-space-between">
                <v-col class="d-flex align-center justify-center" sm="12" md="4" lg="2" cols="12">
                    <img width="150" src="@/assets/images/logotest.png"/>
                </v-col>
                <v-col sm="12" md="4" lg="2" cols="12">
                    <v-menu open-on-hover open-on-click>
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" link prepend-icon="user-plus">
                                <v-list-item-title>
                                    <ParagraphText>
                                        {{ t('common.register') }}
                                    </ParagraphText>
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                        <v-list>
                            <v-list-item :prepend-icon="item.icon" link :to="'/' + item.link" v-for="(item, index) in items"
                                :key="index" :value="index">
                                <v-list-item-title>
                                    <ParagraphText>{{ item.title }}</ParagraphText>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>

                    </v-menu>

                    <v-list-item link prepend-icon="phone">
                        <v-list-item-title>
                            <ParagraphText>
                                {{ t('common.hotline') }}
                            </ParagraphText>
                        </v-list-item-title>
                    </v-list-item>

                </v-col>
            </v-row>
            -->
            <Header/>
        </header>

        <!-- Header -->
        <v-row>
            <v-col cols="12">
                <RouterView>

                </RouterView>
            </v-col>

        </v-row>
        <!-- Footer -->
        <footer>
            <v-row class="pa-4 mt-4 bg-orange justify-space-between">
                <v-col sm="12" md="4" cols="12">

                </v-col>
                <v-col sm="12" md="4" cols="12" class="d-flex justify-center align-end">
                    <label>2024, FaztPetz Team</label>
                </v-col>
                <v-col sm="12" md="4" cols="12">
                    <v-row>
                        <v-col cols="12" class="d-flex justify-end">
                            <ParagraphText>{{ t('common.contactInfo') }}</ParagraphText>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-end">
                            <v-list-item link prepend-icon="envelope">
                        <v-list-item-title>
                            <ParagraphText>
                                {{ t('common.email') }}
                            </ParagraphText>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item link prepend-icon="phone">
                        <v-list-item-title>
                            <ParagraphText>
                                {{ t('common.hotline') }}
                            </ParagraphText>
                        </v-list-item-title>
                    </v-list-item>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </footer>

    </v-container>
</template>
<style scoped>
footer {
    bottom: 0;
}
</style>