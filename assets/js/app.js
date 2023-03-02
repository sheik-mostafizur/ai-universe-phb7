// Fetch or get data from API
const getDataFromAPI = () => {
  isLoading(true);

  // data or API source
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  // fetch data
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showData(data.data.tools));
};
getDataFromAPI();

// See 0 to 6 data
function showData(data) {
  const show_all_data = document.getElementById("show_all_data");
  show_all_data.innerHTML = "";
  data &&
    data.slice(0, 6).forEach((singleData) => {
      show_all_data.appendChild(createSingleItem(singleData));
    });

  // see all data eventHandler
  const see_more = document.getElementById("see_more");
  see_more.addEventListener("click", () => seeMoreData(data));

  isLoading(false);
}

// see all data
function seeMoreData(data) {
  const show_all_data = document.getElementById("show_all_data");
  show_all_data.innerHTML = "";
  data &&
    data.forEach((singleData) => {
      show_all_data.appendChild(createSingleItem(singleData));
    });

  // hide button
  const btn = document.getElementById("see_more").parentElement;
  btn.innerHTML = "";
}

function isLoading(isLoaded) {
  const loading = document.querySelector("#loading img");
  if (isLoaded) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
}
