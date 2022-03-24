const input = document.getElementById("searchInput");
const btn = document.getElementById("button-search");
const grid = document.getElementById("grid");

const apiRequest = () => {
  grid.innerHTML = "";
  let url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=9&client_id=KIE6vz3GLkboYtrWbGSydqDCpsUVCLyrCxCRN2X8ifU";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })

    .then((data) => {
      loadImg(data);
    })

    .catch((error) => console.log(error));
};

const loadImg = (data) => {
  for (let x = 0; x < data.results.length; x++) {
    let image = document.createElement("div");
    image.className = "img-test";
    image.style.background = "url(" + data.results[x].urls.raw + ")";
    image.style.backgroundPosition = "center";
    image.style.backgroundSize = "cover";

    document.getElementById("grid").appendChild(image);
  }
};

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    apiRequest();
  }
});

btn.addEventListener("click", apiRequest());
