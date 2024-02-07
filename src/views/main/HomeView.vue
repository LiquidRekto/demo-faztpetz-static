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
    <div>
        <div v-if="currentUser">
            <label>
                Welcome, {{ currentUser }}!
            </label>
            <v-btn @click="onLogoutClick">
                Test Logout
            </v-btn>
        </div>
        <div v-else>
            <label>
                No user logged in!
            </label>
            <v-btn @click="onLoginClick">
                Test Login
            </v-btn>
        </div>
    </div>
</template>