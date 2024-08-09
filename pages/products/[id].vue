<template>
  <h1>here is your parameter --- {{id}}</h1>
</template>

<script setup>
const {id} = useRoute().params
</script>

<style>

</style>