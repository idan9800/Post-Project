import {
  renderPost,
  renderByCategory,
  renderBySearch,
} from "./postFunctions.js";

renderPost();

const $search = document.getElementById("search-posts-field");
const $filterPicker = document.getElementById("category-picker");

$filterPicker.addEventListener("change", (event) => {
  let selectedCategory = event.target.value;
  if (selectedCategory != "") {
    renderByCategory(selectedCategory);
  } else {
    renderPost();
  }
});
$search.addEventListener("input", (event) => {
  let searchText = event.target.value;

  if (searchText != "") {
    renderBySearch(searchText.toLowerCase());
  } else {
    renderPost();
  }
});

let date = new Date();
let year = date.getFullYear();
document.getElementById("footer").innerHTML = `Posts Project &copy;${year}`;
