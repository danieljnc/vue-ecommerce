<script setup>
import { ContentLoader } from 'vue-content-loader'
</script>

<template>
    <content-loader
        class='mr-20'
        :speed='2'
        :width='400'
        :height='200'
        primaryColor="#f3f3f3"
        secondaryColor="#e1e1e1"/>
</template>

<style scoped>
.mr-20 {
    margin-right: 120px;
}
</style>
