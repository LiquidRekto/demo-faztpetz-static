<script setup lang="ts">
import router from "@/router";
import { CommonUtils } from "@/utils/common.utils"
import { StorageUtils } from "@/utils/storage.utils";
let currentUser = CommonUtils.getUserEmail()
let onLogoutClick = () => {
    StorageUtils.clearItem("tokenInfo")
    router.push({
        name: 'login'
    })
}

let onLoginClick = () => {
    router.push({
        name: 'login'
    })
}
</script>
<template>
    <div class="h-50">
        <v-img cover class="mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflJwN5U47ntffuz3KFosPyXQXSwuJEo_tZw&s">
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col cols="12">
                                <label class="text-h2 font-weight-bold">
                                    Cảm thấy mất quá nhiều thời gian trong việc tìm thú cưng yêu thích?
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <label class="text-h4 font-weight-light">
                                    Cảm thấy mất quá nhiều thời gian trong việc tìm thú cưng yêu thích?
                                </label>
                            </v-col>
                            <v-col cols="12">
                                <v-btn></v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        
                    </v-col>
                </v-row>
            </v-img>  
    </div>
            
</template>