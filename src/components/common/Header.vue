<script setup lang="ts">
import { SessionStorageUtils } from '@/utils/storage.utils';
import { type ShopItem } from '@/interfaces/Items';
import { ref } from 'vue';

const drawer = ref(false)
const cartStr= SessionStorageUtils.getItem("itemsInCart")
const cartArray = ref<Array<ShopItem>>(cartStr !== '' ? JSON.parse(cartStr) : [])
const numInCart = ref<number>(cartArray.value.length ?? 0)

</script>
<template>
    <div class="d-sm-flex mb-16 d-md-none">
        <v-app-bar class="bg-cyan" :elevation="2">
    <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="text-white"></v-app-bar-nav-icon>
     </template>

    <v-app-bar-title>
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <router-link to="home">
                    <img width="100" src="@/assets/images/faztpetz.png"/>
                </router-link>
            </v-col>
        </v-row>
        
    </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
        <v-list-item link to="/quick-find" title="Tìm nhanh"></v-list-item>
        <v-list-item link to="/pet-list" title="Chó cảnh"></v-list-item>
        <v-list-item link to="/pet-list/cat" title="Mèo cảnh"></v-list-item>
        <v-list-item link to="/about-us" title="Về chúng tôi"></v-list-item>
        <v-list-item link to="/contacts" title="Liên hệ"></v-list-item>
    </v-navigation-drawer>
    </div>
    <div class="d-none d-md-block pt-4">
    <v-row class="px-4 bg-white justify-center">
        <v-col class="d-flex align-center justify-center" cols="4">
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="4">
            <router-link to="home">
                <img width="150" src="@/assets/images/faztpetz.png"/>
            </router-link>
        </v-col>
        <v-col class="d-flex align-center justify-end" cols="4">
            <router-link to="/checkout">
                <v-badge v-if="numInCart > 0" color="error" :content="numInCart" location="top start">
                    <v-icon color="black">fa-solid fa-cart-shopping</v-icon>
                </v-badge>
                <v-icon v-else color="black">fa-solid fa-cart-shopping</v-icon>
            </router-link>
        </v-col>
    </v-row>
    <v-row class="px-4 bg-cyan justify-center">
        <v-col class="d-flex align-center justify-center py-0" sm="12" md="4" lg="2" cols="12">
            <v-btn link to="/quick-find" size="large" class="text-white bg-transparent border-0 elevation-0">Tìm nhanh</v-btn>
            <v-btn link to="/pet-list" size="large"  class="text-white bg-transparent border-0 elevation-0">Chó cảnh</v-btn>
            <v-btn link to="/pet-list/cat" size="large"  class="text-white bg-transparent border-0 elevation-0">Mèo cảnh</v-btn>
            <v-btn link to="/about-us" size="large"  class="text-white bg-transparent border-0 elevation-0">Về chúng tôi</v-btn>
            <v-btn link to="/contacts" size="large"  class="text-white bg-transparent border-0 elevation-0">Liên hệ</v-btn>
        </v-col>
    </v-row>
    </div>
</template>
