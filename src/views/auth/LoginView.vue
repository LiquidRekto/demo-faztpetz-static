<script setup lang="ts">
import { API_R_200 } from '@/constants/codes';
import type { IAccountLogin } from '@/interfaces/Account';
import router from '@/router';
import { AuthService } from '@/services/auth.service';
import { StorageUtils } from '@/utils/storage.utils';
import type { AxiosResponse } from 'axios';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

let username = ref<string>('')
let password = ref<string>('')

const onLoginSubmit = async () => {

    const payload = {
        username: username.value,
        password: password.value
    } as IAccountLogin

    let response = ( await AuthService.login(payload)) as AxiosResponse

    if (response.status != API_R_200) {

    }

    if (response.status == API_R_200) {
        StorageUtils.setItem('tokenInfo', JSON.stringify(response!.data))
        router.push({
            name: 'home'
         })
    }
}
</script>
<template>
    <v-container fluid>
        <v-row class=" d-flex flex-column align-center text-center justify-center">
            <v-card class="pa-4" width="400">
            <p class="text-h4">{{ $t('common.login') }}</p>
            <label>Tên đăng nhập</label>
            <v-text-field v-model="username" density="compact">

            </v-text-field>
            <label>Mật khẩu</label>
            <v-text-field v-model="password" density="compact">
                
            </v-text-field>
            <v-btn
            color="primary-darken-1"
            class="densed-btn"
            x-large
            block
            dark
            @click="onLoginSubmit"
            >{{ $t('common.login') }}</v-btn
          >

        </v-card>
        </v-row>
        
    </v-container>
    
</template>