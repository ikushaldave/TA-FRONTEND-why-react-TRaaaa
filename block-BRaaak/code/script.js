const root = document.getElementById("root");

const ArticleCard = () => {
  return (
		<div className="article">
			<div className="feature-image">
				<img src="https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="images" />
				<div className="published-date">27 Mar</div>
				<div className="category">photos</div>
			</div>
			<div className="article-content">
				<h2 className="article-heading">
					<a href="#">City Lights in New York</a>
				</h2>
				<h4 className="article-sub-heading">The city that never sleeps.</h4>
				<p> New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers. </p>
				<div className="article-extra-info">
					<span className="posted-time-ago">06 mins ago</span>
					<span className="total-comment">
						<i class="fas fa-comments"></i> 39 comments
					</span>
				</div>
			</div>
		</div>
  );
}

const ui = (
  <>
    <header className="header">
      <h1 className="center">
        All Articles
      </h1>
      <h4 className="center">
        Collection of best articles on Startups
      </h4>
    </header>
    <main>
      <div className="articles">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </main>
    </>
)

ReactDOM.render(ui, root)