<template>
  <div class="px-4 sm:px-10 md:px-12">
    <div class="py-16 sm:flex sm:justify-between">
      <Search :fetchCountries="fetchCountries" :findCountries="findCountries" />
      <Filter :fetchRegions="fetchRegions"/>
    </div>
    <LoadingSpinner v-if="pending" />
    <div v-else class="custom-sm:grid flex flex-wrap justify-center grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 custom-lg:grid-cols-4 gap-16">
      <CountryCard
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup>
const countries = ref([]);
const pending = ref(false);

const fetchCountries = async (query) => {
  pending.value = true;
  try {
    const data = await $fetch(`https://restcountries.com/v2/name/${query}`);
    countries.value = data;
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
};

const findCountries = async () => {
  pending.value = true;
  try {
    const data = await $fetch(`https://restcountries.com/v2/all`);
    countries.value = data;
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
};

const fetchRegions = async (query) => {
  pending.value = true;
  try {
    const data = await $fetch(`https://restcountries.com/v2/region/${query}`);
    countries.value = data;
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
};

onMounted(() => { 
  findCountries(); 
});
</script>
