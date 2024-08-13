<template>
  <NuxtLink :to="`/countries/${country.name}`" class="cursor-pointer">
    <div class="country-card max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
    <div
      class="bg-cover bg-center h-52 custom-sm:h-44 w-full bg-white rounded-t-md border border-gray-300"
      :style="{ backgroundImage: `url(${country.flag})` }"
    ></div>
      <div class="p-10 bg-white flex flex-col rounded-b-md">
        <h2 class="font-bold text-xl mb-6">{{ country.name }}</h2>
        <p class="text-gray-700 text-base mb-1"><strong>Population:</strong> {{ country.population }}</p>
        <p class="text-gray-700 text-base mb-1"><strong>Region:</strong> {{ country.region }}</p>
        <p class="text-gray-700 text-base mb-1"><strong>Capital:</strong> {{ country.capital }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const {country} = defineProps(['country']);
</script>

<style scoped>
/* Custom styles if needed */
</style>
