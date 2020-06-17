import React from "react";

function CardDeck() {
	return (
		<div className="container-fluid">
			<div className="card-deck">
				<div className="card">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/320px-Above_Gotham.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">New York</h5>
						<p className="card-text">
							The true New Yorker secretly believes that people
							living anywhere else have to be, in some sense,
							kidding.
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://cdngeneral.rentcafe.com/dmslivecafe/3/131935/WEB_Miami_006_.jpg?crop=(0,0,300,200)&cropxunits=300&cropyunits=200&width=580&height=385&mode=pad&bgcolor=333333&scale=both"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">Miami</h5>
						<p className="card-text">
							Miami is one of these places where diversity is in
							our blood, where, you know, if you want to go have a
							Nicaraguan breakfast, a Cuban lunch, and an American
							diner dinner, you do.
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://cdn-static.findly.com/wp-content/uploads/sites/1034/2019/10/STRoadto_unleashamerica-e1526121138266.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">Las Vegas</h5>
						<p className="card-text">
							Life is more fun with games. What happens in Vegas,
							stays in Vegas!
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://media.distractify.com/brand-img/mU-qlXZZc/480x252/gettyimages-1177141282-1592074514695.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-center">Alaska</h5>
						<p className="card-text">
							The most beautiful place in the world is, of course,
							the world itself.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CardDeck;
