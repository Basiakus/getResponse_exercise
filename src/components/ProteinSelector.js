import React from 'react';
import Icon from './Icon'
class ProteinSelector extends React.Component {
	render() {
		return (
			<div className="proteinSelector">
				<p>SELECT YOUR PROTEIN OPTIONS</p>
				<div className="icons">
					<div onClick={this.props.appleSelect}><Icon state={this.props.state.apple} character="🍎" ></Icon></div>
					<div onClick={this.props.beefSelect}><Icon state={this.props.state.beef} character="🍖"></Icon></div>
					<div onClick={this.props.breadSelect}><Icon state={this.props.state.bread} character="&#127838;"></Icon></div>
					<div onClick={this.props.fishSelect}><Icon state={this.props.state.fish} character="&#128031;"></Icon></div>
					<div onClick={this.props.chickenSelect}><Icon state={this.props.state.chicken} character="🍗"></Icon></div>
				</div>
			</div>
		)
	}
}
export default ProteinSelector;