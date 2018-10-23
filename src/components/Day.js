import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Day extends React.Component {
	render() {
		return (
			<ul className="day">
				<li>DAY {this.props.weekDay + 7*(this.props.state.currentWeek -1)}</li>
				<li>{this.props.option.h6am.desc}</li>
				<li>{this.props.option.h9am}</li>
				<li>{this.props.option.h12pm.desc}</li>
				<li>{this.props.option.h3pm}</li>
				<li>{this.props.option.h6pm}</li>
				<li>
					<span className="workout">
						<p>{this.props.option.carb}</p>
						<label><FontAwesomeIcon icon="dumbbell" /><input type="checkbox" /></label>
					</span>
				</li>

			</ul>
		)
	}
}
export default Day;