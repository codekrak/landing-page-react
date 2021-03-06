import React from "react";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg npy-4 bg-dark text-white-50 mb-3">
				<a className="navbar-brand text-white" href="#">
					{"Traveling Hipster"}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								{"Home"}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{"About"}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{"Services"}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{"Contact"}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
