<template>
    <label class="text-temp">
        <slot></slot>
    </label>
</template>
<style scoped>
.text-temp:first-letter {
    text-transform: uppercase;
}

.text-temp {
    display: inline-block;
    cursor: inherit;
}
</style>