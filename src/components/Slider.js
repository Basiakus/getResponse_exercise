import React from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends React.Component {
	render() {
		return (
			<div className="slider">
				<LeftArrow state={this.props.state.currentWeek} prevWeek={this.props.prevWeek} />
				<span> Week {this.props.state.currentWeek}</span>
				<RightArrow state={this.props.state.currentWeek} nextWeek={this.props.nextWeek} />	
			</div>
		)
	}
}

export default Slider;