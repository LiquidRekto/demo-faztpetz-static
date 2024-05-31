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
    <div class="h-sm-100 h-md-75 h-lg-50">
        <v-img cover class="mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflJwN5U47ntffuz3KFosPyXQXSwuJEo_tZw&s">
                <v-row class="d-flex h-100">
                    <v-col class="d-flex align-center" sm="12" md="6" cols="12">
                        <v-row class="pa-10 h-100">
                            <v-col cols="12" class="d-flex align-end">
                                <label class="text-white text-h3 text-lg-h2 font-weight-bold">
                                    Cảm thấy mất quá nhiều thời gian trong việc tìm thú cưng yêu thích?
                                </label>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center">
                                <label class="text-white text-h6 text-md-h5 font-weight-light">
                                    Chỉ 3-4 phút, bạn có thể tìm ra thú cưng phù hợp với bạn!
                                </label>
                            </v-col>
                            <v-col cols="12" class="d-flex align-start">
                                <v-btn link to="quick-find" size="large" class="bg-orange text-white">
                                    Tìm hiểu ngay!
                                    <template v-slot:append>
                                        <v-icon color="white">fa-solid fa-arrow-right</v-icon>
                                    </template>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col sm="12" md="6" cols="12">
                        
                    </v-col>
                </v-row>
            </v-img>  
    </div>
            
</template>