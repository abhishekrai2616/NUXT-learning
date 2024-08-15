<template>
	<div class="px-4 sm:px-10 md:px-12 container mx-auto">
		<div class="py-16 sm:flex sm:justify-between">
			<Search />
			<Filter />
		</div>
		<LoadingSpinner v-if="isLoading" />
		<div
			v-else
			class="custom-sm:grid flex flex-wrap justify-center grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 custom-lg:grid-cols-4 gap-16">
			<CountryCard
				v-for="country in countries"
				:key="country.name"
				:country="country" />
		</div>
	</div>
</template>

<script setup>
	const { countries, isLoading, fetchCountries } = useCountries();

	onMounted(() => {
		fetchCountries("/all");
	});
</script>
