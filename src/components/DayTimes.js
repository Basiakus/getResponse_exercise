import React from 'react';

class DayTimes extends React.Component {
	render() {
		return (
			<ul className="dayTimes">
				<li></li>
				<li>6:00<span>AM</span></li>
				<li>9:00<span>AM</span></li>
				<li>12:00<span>PM</span></li>
				<li>3:00<span>PM</span></li>
				<li>6:00<span>PM</span></li>
				<li>
					<span className="workout">
						<span></span>
						<p>Workout</p>
					</span>
				</li>
			</ul>
		)
	}
}

export default DayTimes;