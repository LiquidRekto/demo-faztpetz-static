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
    title="Lọc kết quả"
    confrim-btn-text="Lọc"
    cancel-btn-text="Huỷ"
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </ConfirmDialog>
</template>
