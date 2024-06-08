<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PaymentConfirmDialog from "@/components/PaymentConfirmDialog.vue";

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
      <v-col sm="12" md="6" cols="12">
        <v-list :max-height="500" class="overflow-scroll-y rounded-xl bg-gray">
          <v-list-item v-for="n in 3" :key="n">
            <v-card rounded class="mx-auto">
              <!--
            <v-row></v-row>
              <template v-slot:title>
                <span class="font-weight-black">Welcome to Vuetify</span>
              </template>

              <v-card-text class="bg-surface-light pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, ratione debitis quis est labore voluptatibus! Eaque
                cupiditate minima, at placeat totam, magni doloremque veniam
                neque porro libero rerum unde voluptatem!
              </v-card-text>
              -->
              <v-row>
                <v-col cols="3">
                  <img
                    width="200"
                    src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
                  />
                </v-col>
                <v-col cols="7">
                  <v-row>
                    <v-col cols="12">
                      <span class="font-weight-black text-h5"
                        >Welcome to Vuetify</span
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <span>Số lượng: 6</span>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="2">
                  <v-row class="d-flex">
                    <v-col class="d-flex align-end" cols="12">
                      <v-btn size="small">
                        <v-icon>fa-solid fa-plus</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="12">
                      <v-btn size="small">
                        <v-icon>fa-solid fa-minus</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="12">
                      <v-btn size="small">
                        <v-icon>fa-solid fa-trash</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col sm="12" md="6" cols="12">
        <v-row>
          <v-col cols="12">
            <label class="text-h6">Thông tin thanh toán</label>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12" md="6" cols="12">
            <v-text-field
              label="Họ, tên đệm"
              variant="outlined"
              rounded
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="6" cols="12">
            <v-text-field label="Tên" variant="outlined" rounded></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12" md="4" cols="12">
            <v-text-field
              label="Tỉnh/thành phố"
              variant="outlined"
              rounded
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="4" cols="12">
            <v-text-field
              label="Quận/huyện"
              variant="outlined"
              rounded
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="4" cols="12">
            <v-text-field
              label="Phường/xã"
              variant="outlined"
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12" md="12" cols="12">
            <v-text-field
              label="Địa chỉ chi tiết"
              variant="outlined"
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12" md="6" cols="12">
            <v-text-field label="SĐT" variant="outlined" rounded></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end" md="12" cols="12">
            <v-btn size="large" color="primary" class="text-white">
              Thanh toán
              <PaymentConfirmDialog activator="parent" />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
