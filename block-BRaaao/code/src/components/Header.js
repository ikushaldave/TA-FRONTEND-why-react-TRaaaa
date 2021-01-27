function Header () {
  return (
		<header className="header">
			<div className="container flex justify-space-between align-item-center ptb-2">
				<div className="company-logo">
					<a href="index.html" className="logo flex align-item-center">
						<img src="/logo192.png" alt="logo" />
						<h3>React App</h3>
					</a>
				</div>
				<nav className="nav">
					<a href="##">Home</a>
					<a href="##">About</a>
					<a href="##">Contact</a>
				</nav>
			</div>
		</header>
  );
}

export default Header;