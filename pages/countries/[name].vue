<template>
  <div class="bg-white h-screen px-4 sm:px-10 md:px-12">
    <NuxtLink to="/">
      <div class="inline-flex bg-white border-none shadow-md rounded-sm cursor-pointer space-x-4 py-3 pr-12 pl-4 mt-8 rounded-xl">
        <img
          src="../../public/icons/backButton.svg"
          alt="Search Icon"
          class=""
        />
        <button class="text-lg font-semibold text-black transition-all duration-300">
          Back
        </button>
      </div>
    </NuxtLink>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 justify-items-normal sm:justify-items-center">
      <!-- Flag Image -->
      <img 
        :src="country[0]?.flag"
        alt="Flag Image"
        class="w-full max-w-md mx-auto lg:mx-0 rounded-t-md border border-gray-400 lg:mt-16"
      />
      
      <!-- Country Details -->
      <div class="custom-z:ml-16 mt-4 lg:mt-0">
        <h2 class="font-bold text-4xl mb-8">{{ country[0]?.name }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="grid gap-4">
            <p><strong>Native Name:</strong> {{ country[0]?.nativeName }}</p>
            <p><strong>Population:</strong> {{ country[0]?.population }}</p>
            <p><strong>Region:</strong> {{ country[0]?.region }}</p>
            <p><strong>Sub Region:</strong> {{ country[0]?.subregion }}</p>
            <p><strong>Capital:</strong> {{ country[0]?.capital }}</p>
          </div>
          <div class="">
            <p class="mt-4"><strong>Top Level Domain:</strong> {{ country[0]?.topLevelDomain?.join(', ') }}</p>
            <p class="mt-4"><strong>Currencies:</strong> {{ country[0]?.currencies?.map(c => c.name).join(', ') }}</p>
            <p class="mt-4"><strong>Languages:</strong> {{ country[0]?.languages?.map(l => l.name).join(', ') }}</p>
          </div>
        </div>
        
        <!-- Borders -->
        <div class="mt-12 flex flex-wrap space-x-2">
          <span class="py-2">Borders:</span>
          <div class="flex flex-wrap space-x-2">
            <span v-if="!country[0]?.borders || country[0]?.borders.length === 0" class="py-2">No Borders</span>
            <span v-else
              v-for="border in country[0]?.borders" 
              :key="border" 
              class="bg-white border shadow-md px-4 py-2 rounded-sm text-sm"
            >
              {{ border }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { name } = useRoute().params;
  const country = ref([]);
  	const { url } = useRuntimeConfig().public;
 
  const fetchCountry = async () => {
    try {
      const data = await $fetch(`${url}/name/${name}`);
      country.value = data;
    } catch (err) {
      console.log(err);
    }
  };

  onMounted(() => { 
    fetchCountry();
  });
</script>
