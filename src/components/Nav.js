import React from 'react';

class Nav extends React.Component {
	render() {
		return (
			<div className="nav">
				<ul>
					<li></li>
					<li>Dashboard</li>
					<li>Recipes</li>
					<li>Challenge</li>
					<li></li>
					<li></li>
					<li></li>
					<li>
						<div className="img"></div>
						<span id="name">Adam Basiak</span>
						<span id="open">&#60;</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default Nav;