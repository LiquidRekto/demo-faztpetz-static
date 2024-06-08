<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import { MiscUtils } from "@/utils/misc.utils";
import { useDisplay } from "vuetify";
import FilterDialog from '@/components/FilterDialog.vue'

const { t } = useI18n();

const petList = ref([]);

const display = useDisplay();
const rowColPair = computed(() => {
  return MiscUtils.getRowDisplayPair(display);
});
</script>
<template>
  <v-container>
    <v-row class="d-flex justify-space-between">
      <v-col class="d-flex justify-start" sm="12" md="4" lg="3" cols="12">
        <label class="text-h4 font-weight-bold">Chó Cảnh</label>
      </v-col>
      <v-col class="d-flex justify-end" sm="12" md="4" lg="3" cols="12">
        <v-btn class="mx-4" color="primary" size="x-small" icon="">
            <v-icon>fa-solid fa-filter</v-icon>
            <FilterDialog
                activator="parent"
            />
        </v-btn>
        <v-text-field :hide-details="true" append-inner-icon="search" rounded variant="outlined" class="shrink"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
        <v-row>
            <v-col md="3" cols="12" v-for="n in 4">
                <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
        </v-row>
        
    </v-row>

    <!--
        <v-row v-for="n in rowColPair!.count">
            <v-col class="text-center" v-for="n in rowColPair!.count" :cols="rowColPair!.colLength">
                <router-link to ="pet-detail">
                    <img width="300" class="rounded-xl pa-4" src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"/>
                    <p class="text-h5 font-weight-bold text-red">Chó Berger</p>
                    <p class="font-weight-bold">3.000.000đ</p>
                </router-link>
            </v-col>
        </v-row>
    -->
    <v-row>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Berger</p>
          <p class="font-weight-bold">3.000.000đ</p>
          <p class="text-gray font-weight-bold">Đã bán: 0</p>
        </router-link>
      </v-col>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://www.dogster.com/wp-content/uploads/2024/02/red-toy-poodle-dog-at-the-park_Mykhaylo_Kozelko_Shutterstock.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Poodle</p>
          <p class="font-weight-bold">3.000.000đ</p>
        </router-link>
      </v-col>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://cdn-i.vtcnews.vn/resize/th/upload/2023/05/19/image2-1660288537-793-width2048height1622-08571053.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Pitbull</p>
          <p class="font-weight-bold">3.000.000đ</p>
        </router-link>
      </v-col>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://ilovemychi.com/wp-content/uploads/2018/12/white-tan-chi-pooping-700.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Chihuahua</p>
          <p class="font-weight-bold">3.000.000đ</p>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://cdn.tgdd.vn/Files/2021/04/14/1343203/cach-nuoi-cho-phoc-dung-ky-thuat-ma-ban-can-biet-202203281135392884.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Phốc</p>
          <p class="font-weight-bold">3.000.000đ</p>
        </router-link>
      </v-col>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://cdn.tgdd.vn/Files/2021/10/11/1389578/cho-beagle-la-giong-cho-gi-nhung-dieu-ban-nen-biet-ve-cho-beagle-202110112336020335.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Beagle</p>
          <p class="font-weight-bold">3.000.000đ</p>
        </router-link>
      </v-col>
      <v-col class="text-center" cols="3">
        <router-link to="pet-detail">
          <img
            width="300"
            height="200"
            class="rounded-xl pa-4"
            src="https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg"
          />
          <p class="text-h5 font-weight-bold text-red">Chó Dachshund</p>
          <p class="font-weight-bold">3.000.000đ</p>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="d-flex jsutify-center">
        <v-col class="justify-center" cols="12">
            <v-pagination rounded="circle" :length="10" :total-visible="5"></v-pagination>
        </v-col>
    </v-row>
  </v-container>
</template>
