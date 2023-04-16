import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Homepage</NavLink>
				</li>
				<li>
					<NavLink to="/about">O nas</NavLink>
				</li>
				<li>
					<NavLink to="/posts">Posty</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Kontakt</NavLink>
				</li>
				<li>
					<NavLink to="/add-post">Dodaj post</NavLink>
				</li>
			</ul>
		</nav>
	);
};
