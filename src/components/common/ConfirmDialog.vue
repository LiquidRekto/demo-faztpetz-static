<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{
  title: string,
  confrimBtnText: string,
  cancelBtnText: string,
  onClickConfirm?: () => {},
  onClickCancel?: () => {},
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
          <slot></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :text="props.confrimBtnText" @click=""></v-btn>
          <v-btn color="secondary" :text="props.cancelBtnText" @click=""></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
