import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProgressPoint extends React.Component {

	render() {
		return (
			<div className={(this.props.week > this.props.state)?'progressPointActive': 'progressPoint'}>
				<FontAwesomeIcon icon="circle"/>
					<span>{this.props.week}</span>
			</div>
		)
	}

}

export default ProgressPoint;