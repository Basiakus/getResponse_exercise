import React from 'react';
import ProgressPoint from './ProgressPoint';

class MiniNav extends React.Component {
	render() {
		return (
			<div className="miniNav">
				<div className="progressBar">
					<p>YOUR 12 WEEK PROGRESS</p>
					<div className="progressPoints">
						<ProgressPoint state={this.props.state.currentWeek} week={1}/>
						<ProgressPoint state={this.props.state.currentWeek} week={2}/>
						<ProgressPoint state={this.props.state.currentWeek} week={3}/>
						<ProgressPoint state={this.props.state.currentWeek} week={4}/>
						<ProgressPoint state={this.props.state.currentWeek} week={5}/>
						<ProgressPoint state={this.props.state.currentWeek} week={6}/>
						<ProgressPoint state={this.props.state.currentWeek} week={7}/>
						<ProgressPoint state={this.props.state.currentWeek} week={8}/>
						<ProgressPoint state={this.props.state.currentWeek} week={9}/>
						<ProgressPoint state={this.props.state.currentWeek} week={10}/>
						<ProgressPoint state={this.props.state.currentWeek} week={11}/>
						<ProgressPoint state={this.props.state.currentWeek} week={12}/>
					</div>
				</div>
			</div>
		)
	}
}

export default MiniNav;