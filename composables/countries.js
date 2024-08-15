export const useCountries = () => {
	const { url } = useRuntimeConfig().public;

	const countries = useState("countries", () => {});
	const isLoading = useState("isLoading", () => false);

	const fetchCountries = async (path) => {
		isLoading.value = true;
		try {
			const data = await $fetch(`${url}${path}`);
			countries.value = data;
			return data;
		} catch (err) {
			console.log(err);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		countries,
		fetchCountries,
		isLoading,
	};
};
