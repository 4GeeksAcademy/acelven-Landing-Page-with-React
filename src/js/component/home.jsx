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
				<Cards text="Just trying out a prop that I had no idea until now!" title="Just a cardz" img="https://picsum.photos/id/237/200/250" />
				<Cards text="Another one just for lols" title="Just a cardsie" img="https://picsum.photos/id/238/200/250" />
				<Cards text="No, really, it's super convenient" title="Just a cardie" img="https://picsum.photos/id/239/200/250" />
				<Cards text="Now until idea no had I that prop a out trying jusT!" title="Just a cardio" img="https://picsum.photos/id/240/200/250" />	
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
