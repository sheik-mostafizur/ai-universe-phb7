// Fetch or get data from API
const getDataFromAPI = () => {
  // data or API source
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  // fetch data
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showData(data.data.tools));
};
getDataFromAPI();

function showData(data) {
  const show_all_data = document.getElementById("show_all_data");
  data &&
    data.slice(0, 6).forEach((singleData) => {
      show_all_data.appendChild(createSingleItem(singleData));
    });
}
