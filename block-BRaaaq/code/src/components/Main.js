import Articles from "./Articles";

function Main () {
  return (
		<main>
			<section className="hero-section">
				<img src="https://images.unsplash.com/photo-1611649019704-92da7e153303?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="hero" />
      </section>
      <section className="articles container">
        <h2 className="section-heading ptb-2 center">Articles</h2>
        <Articles />
      </section>
		</main>
  );
}

export default Main;