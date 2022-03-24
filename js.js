const input = document.getElementById("searchInput");

const grid = document.getElementById("grid");

const removeImg = () => {
  grid.innerHTML = "";
};

const loadImg = () => {
  removeImg();
  let url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=10&client_id=KIE6vz3GLkboYtrWbGSydqDCpsUVCLyrCxCRN2X8ifU";

  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      alert(response.status);
    }
  });
};
