const addMovieToWatchListElement = document.querySelector(".add-movie");
const watchListElement = document.querySelector(".watch-list");

const watchList = JSON.parse(localStorage.getItem("watchList")) ?? [];

// Functions

function renderUI (watchList) {
  watchListElement.innerHTML = "";
  const documentFrag = document.createDocumentFragment()
  watchList.forEach((movie, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.classList.add("watch-movie-item",`${(movie.isWatched) ? "watched" : "to-watch"}`);
    li.setAttribute("data-id", index);
    btn.classList.add("btn")
    li.textContent = movie.title;
    btn.textContent = (movie.isWatched) ? "Watched" : "To Watch";
    li.append(btn);
    documentFrag.append(li);
  });
  watchListElement.append(documentFrag);
}

function toggle (target) {
  const id = target.closest("li").dataset.id;
  watchList[id].isWatched = (watchList[id].isWatched ? false : true);
  renderUI(watchList)
}

// Event Listener

addMovieToWatchListElement.addEventListener("keyup", (e) => {
  if (e.keyCode == 13 && e.target.value.trim()) {
    watchList.push({
      "title": e.target.value.trim(),
      "isWatched": false
    })
    e.target.value = ""
    localStorage.setItem("watchList", JSON.stringify(watchList));
    renderUI(watchList)
  }
})

watchListElement.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    toggle(e.target)
  }
})

// Render

renderUI(watchList)