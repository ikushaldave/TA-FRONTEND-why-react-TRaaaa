const addMovieToWatchListElement = document.querySelector(".add-movie");
const watchListElement = document.querySelector(".watch-list");

const watchList = JSON.parse(localStorage.getItem("watchList")) ?? [];

// Functions

function ele (type, attr = {}, children = []) {

  const element = document.createElement(type);
  
  for (const key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("class")) {
      element.classList.add(...attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child)
    } else {
      const text = document.createTextNode(child);
      element.append(text)
    }
  })

  return element;
}

function renderUI(watchList) {
	watchListElement.innerHTML = "";
	const documentFrag = document.createDocumentFragment();

  watchList.forEach((movie, index) => {
    const li = ele(
		"li",
		{
			class: ["watch-movie-item", `${movie.isWatched ? "watched" : "to-watch"}`],
			"data-id": index,
		},
		[
			movie.title,
			ele(
				"button",
				{
					class: ["btn"],
				},
				[movie.isWatched ? "Watched" : "To Watch"]
			),
		]
    );

		documentFrag.append(li);
	});

	localStorage.setItem("watchList", JSON.stringify(watchList));
	watchListElement.append(documentFrag);
}

function toggle(target) {
	const id = target.closest("li").dataset.id;
	watchList[id].isWatched = !watchList[id].isWatched;
	renderUI(watchList);
}

// Event Listener

addMovieToWatchListElement.addEventListener("keyup", (e) => {
	if (e.keyCode == 13 && e.target.value.trim()) {
		watchList.push({
			title: e.target.value.trim(),
			isWatched: false,
		});
		e.target.value = "";
		renderUI(watchList);
	}
});

watchListElement.addEventListener("click", (e) => {
	if (e.target.tagName == "BUTTON") {
		toggle(e.target);
	}
});

// Render

renderUI(watchList);
