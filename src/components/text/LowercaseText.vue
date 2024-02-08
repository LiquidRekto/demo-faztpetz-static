<template>
    <label class="text-temp">
        <slot></slot>
    </label>
</template>
<style scoped>
.text-temp {
    text-transform: lowercase;
    cursor: inherit;
}
</style>