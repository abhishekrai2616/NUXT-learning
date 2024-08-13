export const useCountries = () => {
	const countries = useState("countries", () => {});

	const setCountries = (info) => {
		countries.value = info;
	};

	return {
		countries,
		setCountries,
	};
};