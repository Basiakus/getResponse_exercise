import React from 'react';


class LeftArrow extends React.Component {

	render() {
		return (
			<div onClick={this.props.prevWeek} className="leftArrow">
				&#60;
			</div>
		)
	}
}

export default LeftArrow;