<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ConfirmDialog from "../components/common/ConfirmDialog.vue";

const { t } = useI18n();
const props = defineProps<{
  activator?: string;
  activated?: boolean;
}>();

const isActive = ref(false);
</script>
<template>
  <ConfirmDialog
    :activator="props.activator"
    title="Thông tin thanh toán"
    confrim-btn-text="Xác nhận"
    cancel-btn-text="Huỷ bỏ"
  >
    <div>Đây là Dialog</div>
  </ConfirmDialog>
</template>
