<template>
    <component :is="icon"/>   
</template>
<script setup lang="ts">
    import { defineProps } from 'vue'
    const {icon} = defineProps(['icon'])
</script>