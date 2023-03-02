// Fetch or get data from API
const getDataFromAPI = () => {
  // data or API source
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  // fetch data
  fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data.data.tools));
};
getDataFromAPI();

console.log(createSingleItem());
