<template>
  <div class="relative my-8 w-52 sm:my-0">
    <img
        src="../public/icons/downArrow.svg"
        alt="ICON"
        class="absolute top-1/2 right-5 transform -translate-y-1/2 font-extrabold"
    />
    <select 
      v-model="selectedRegion"
      class="text-base w-full py-4 pr-16 pl-4 outline-none border-none text-gray-500 text-custom rounded-custom shadow-custom rounded-2xl appearance-none"
      name="select-where" 
      aria-label="Filter by Region"
    >
      <option value="" disabled>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script setup>
const selectedRegion = ref('');
const { countries, setCountries } = useCountries();
	const { url } = useRuntimeConfig().public;

const fetchRegions = async (query) => {
  try {
    const data = await $fetch(`${url}/region/${query}`);
    setCountries(data);
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
};

watch(selectedRegion, (newValue) => {
  if (newValue) {
    fetchRegions(newValue);
  }
});
</script>

<style>
</style>
