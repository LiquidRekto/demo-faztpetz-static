<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col>
        <label class="text-h4 font-weight-bold">Giỏ hàng</label>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" sm="12" md="6" cols="12">
        <v-list :height="300" class="pa-4 overflow-scroll-y rounded-xl bg-gray">
          <v-list-item v-for="n in 3" :key="n">
            <v-card
              class="mx-auto"
              prepend-icon="$vuetify"
              subtitle="The #1 Vue UI Library"
              width="400"
            >
              <template v-slot:title>
                <span class="font-weight-black">Welcome to Vuetify</span>
              </template>

              <v-card-text class="bg-surface-light pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, ratione debitis quis est labore voluptatibus! Eaque
                cupiditate minima, at placeat totam, magni doloremque veniam
                neque porro libero rerum unde voluptatem!
              </v-card-text>
            </v-card>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="d-flex justify-end" sm="12" md="6" cols="12">
        <v-btn size="large" color="primary" class="text-white"
          >Thanh toán</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
