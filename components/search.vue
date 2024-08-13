<template>
  <div class="relative w-full sm:w-5/12">
    <img
      src="../public/icons/search.svg"  
      alt="Search Icon"
      class="w-5 text-gray-500 absolute top-1/2 left-5 transform -translate-y-1/2"
    />
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for a Country..."
      class="text-base w-full py-4 px-16 outline-none border-none text-custom text-gray-900 rounded-custom shadow-custom rounded-2xl"
    />
  </div>
</template>

<script setup>

const searchQuery = ref('');

const { countries, setCountries } = useCountries();
const pending = ref(false);

const fetchCountries = async (query) => {
  try {
    const data = await $fetch(`https://restcountries.com/v2/name/${query}`);
    setCountries(data);
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
};

const findCountries = async () => {
  try {
    const data = await $fetch(`https://restcountries.com/v2/all`);
    setCountries(data);
  } catch (err) {
    console.log(err);
  } finally {
    pending.value = false;
  }
};

const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const handleSearch = debounce(() => {
  if (searchQuery.value.trim() !== '') {
    fetchCountries(searchQuery.value.trim());
  }
}, 300); 

watch(searchQuery, (newValue) => {
  if (newValue === '') {
    findCountries();
  } else {
    handleSearch();
  }
});

onMounted(() => {
  findCountries();
});
</script>
