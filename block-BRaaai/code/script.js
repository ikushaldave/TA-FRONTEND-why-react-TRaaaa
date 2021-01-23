const root = document.getElementById("root")

const card = (
	<div className="card">
		<div className="feature-image">
      <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
      <div className="published-date">
        <span>27 Mar</span>
      </div>
      <span className="category">photos</span>
		</div>
		<div className="card-content">
			<h3>City Lights in New York</h3>
			<h4>The City that never sleeps.</h4>
			<p>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
			<p className="card-extra-info">
				<span className="time-ago">06 mins ago</span>
				<span className="total-comments">
					<i className="fas fa-comments"></i> 39 comments
				</span>
			</p>
		</div>
	</div>
);

ReactDOM.render(card, root)