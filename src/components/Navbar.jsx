import { Link } from "react-router-dom";
import LegoButton from "./legoButton.jsx";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://i.pinimg.com/564x/ce/94/a7/ce94a7069eca50b16d3a047af943d20b.jpg" height="50rem" alt="lego logo" />
				</Link>
				<div className="ml-auto">
					<Link to={"/create"} className="btn"><LegoButton display={"Create"} color={"red"} /></Link>
				</div>
			</div>
		</nav>
	);
};