import React from 'react';
import Slider from './Slider';
import MiniNav from './MiniNav';
import ProteinSelector from './ProteinSelector';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<MiniNav state={this.props.state} />
				<Slider
					state={this.props.state} 
					prevWeek={this.props.prevWeek} 
					nextWeek={this.props.nextWeek} 
				/>
				<ProteinSelector 
					state={this.props.state}
					breadSelect={this.props.breadSelect}
					appleSelect={this.props.appleSelect}
					fishSelect={this.props.fishSelect}
					chickenSelect={this.props.chickenSelect}
					beefSelect={this.props.beefSelect}
				/>
			</div>
		)
	}
}

export default Header;