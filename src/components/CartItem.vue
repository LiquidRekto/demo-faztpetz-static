<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{
  image?: string,
  title: string,
  count: number
}>()

const isActive = ref(false)

</script>
<template>
  
</template>
