<template>
  <div class="px-4 sm:px-10 md:px-12">
    <div class="py-16 sm:flex sm:justify-between">
      <Search />
      <Filter />
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
const { countries, setCountries } = useCountries();
const pending = ref(false);

const findCountries = async () => {
  pending.value = true;
  	const { url } = useRuntimeConfig().public;
  try {
    const data = await $fetch(`${url}/all`);
    setCountries(data);
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
