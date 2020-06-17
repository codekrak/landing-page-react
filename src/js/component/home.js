import React from "react";
import Navbar from "./navbar";
import CardDeck from "./carddeck";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<CardDeck />
			<Footer />
		</div>
	);
}
