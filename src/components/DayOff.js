import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DayOff extends React.Component {

	showState = () => {
		alert(
			`
			CURRENT STATUS OF STATE\n
			week: ${this.props.state.currentWeek}\n
			workout: ${this.props.state.workOuts}\n
			meals: ${this.props.state.meals}\n
			protein option:\n
			apple: ${this.props.state.apple}\n
			chicken: ${this.props.state.chicken}\n
			beef: ${this.props.state.beef}\n
			bread: ${this.props.state.bread}\n
			fish: ${this.props.state.fish}\n
			`
		);
	}

	render() {
		return (
			<ul className="dayOff">
				<li>Day {this.props.weekDay + 7*(this.props.state.currentWeek -1)}</li>
				<li><span><FontAwesomeIcon icon="grin" id="grin" />GUILT&#8226;FREE DAY</span></li>
				<li onClick={this.showState}><FontAwesomeIcon icon="print" /><span>State</span></li>
			</ul>
		)
	}
}

export default DayOff;