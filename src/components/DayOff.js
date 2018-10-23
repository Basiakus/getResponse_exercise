import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DayOff extends React.Component {
	render() {
		return (
			<ul className="dayOff">
				<li>Day {this.props.weekDay + 7*(this.props.state.currentWeek -1)}</li>
				<li><span><FontAwesomeIcon icon="grin" id="grin" />GUILT&#8226;FREE DAY</span></li>
				<li><FontAwesomeIcon icon="print" /><span>Print</span></li>
			</ul>
		)
	}
}

export default DayOff;