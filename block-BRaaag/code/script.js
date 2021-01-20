const addMovieToWatchListElement = document.querySelector(".add-movie");
const watchListElement = document.querySelector(".watch-list");

const watchList = JSON.parse(localStorage.getItem("watchList")) ?? [];

// Functions

function renderUI(watchList) {
	const watchItems = watchList.map((movie, index) => {
		return (<li className={`watch-movie-item ${(movie.isWatched) ? "watched" : "to-watch"}`} data-id={index}>
				{movie.title}
				<button className="btn">{movie.isWatched ? "Watched" : "To Watch"}</button>
			</li>);
	});

	ReactDOM.render(watchItems, watchListElement);
}

function toggle(target) {
	const id = target.closest("li").dataset.id;
	watchList[id].isWatched = !watchList[id].isWatched;
	localStorage.setItem("watchList", JSON.stringify(watchList));
	renderUI(watchList);
}

// Event Listener

addMovieToWatchListElement.addEventListener("keyup", (e) => {
	if (e.keyCode == 13 && e.target.value.trim()) {
		watchList.push({
			title: e.target.value.trim(),
			isWatched: false,
		});
		localStorage.setItem("watchList", JSON.stringify(watchList));
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
