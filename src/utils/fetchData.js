export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": "9a37ea6b84mshc24fa61176d115cp1825d7jsna9aced9deba2",
	},
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};
