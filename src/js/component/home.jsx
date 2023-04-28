import React from "react";
import './styles.css'
import Navbar from './navbar.jsx'
import Jumbo from './jumbo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import Cards from './cards.jsx'
import Footer from './footer.jsx'
//create your first component
const Home = () => {
	return (
			<>	
		<div className="navbar">
			<Navbar fixed="top" />
		</div><div className="container">

				<div className="jumbotron">
					<Jumbo />
				</div>
				<div className="cardsContainer">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
				<div>
					<Footer />
				</div>
			</div>
			
			</>
			
			
		
		
	
	);
};
ReactDOM.render(<Home />, document.querySelector("#app"));
export default Home;
