<script setup lang="ts">
import { API_R_200 } from '@/constants/codes';
import type { IAccountLogin } from '@/interfaces/Account';
import router from '@/router';
import { AuthService } from '@/services/auth.service';
import { TestService } from '@/services/test.service';
import { StorageUtils } from '@/utils/storage.utils';
import ParagraphText from '@/components/text/ParagraphText.vue'
import type { AxiosResponse } from 'axios';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

let username = ref<string>('')
let password = ref<string>('')

//const lmao = (await TestService.testGet()) as AxiosResponse
//console.log(lmao)

const error = ref(false)

const onLoginSubmit = async () => {

    const payload = {
        username: username.value,
        password: password.value
    } as IAccountLogin
    console.log(payload)
    let response = (await AuthService.login(payload)) as AxiosResponse
    console.log(response)

    if (response.status != API_R_200) {
        error.value = true
    }

    if (response.status == API_R_200) {
        StorageUtils.setItem('tokenInfo', JSON.stringify(response!.data.data))
        router.push({
            name: 'home'
        })
    }
}
</script>
<template>
    <v-container fluid>
        <v-row class="py-4 d-flex flex-column align-center text-center justify-center">
            <ParagraphText v-if="error" class="text-red">
                {{ t('authView.login.error.incorrectUserOrPwd') }}
            </ParagraphText>
            <v-col sm="6" md="4" cols="12">
                <v-card class="pa-4">
                    <v-form>
                        <p class="text-h4"><b>
                                <ParagraphText>{{ t('common.login') }}</ParagraphText>
                            </b></p>
                        <ParagraphText>
                            {{ t('authView.login.username') }}
                        </ParagraphText>
                        <v-text-field v-model="username" density="compact">

                        </v-text-field>
                        <ParagraphText>
                            {{ t('authView.login.password') }}
                        </ParagraphText>
                        <v-text-field type="password" v-model="password" density="compact">

                        </v-text-field>
                        <v-btn color="primary-darken-1" class="densed-btn" x-large block dark @click="onLoginSubmit">{{
                            t('common.login') }}</v-btn>

                    </v-form>

                </v-card>
            </v-col>

        </v-row>

    </v-container>
</template>