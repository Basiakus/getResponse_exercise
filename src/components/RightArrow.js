import React from 'react';

class RightArrow extends React.Component {

	render() {
		return (
			<div onClick={this.props.nextWeek} className="leftArrow">
				&#62;
			</div>
		)
	}
}

export default RightArrow;