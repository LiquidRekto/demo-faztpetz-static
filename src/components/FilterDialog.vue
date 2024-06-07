<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{
  activator?: string
  activated?: boolean
}>()

const isActive = ref(false)



</script>
<template>
  <v-dialog v-model="isActive" :activator="props.activator" max-width="500">
    <template v-slot:default>
      <v-card title="Lọc kết quả">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text="Lọc" @click=""></v-btn>
          <v-btn color="secondary"  text="Hủy" @click=""></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
