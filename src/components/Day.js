import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Eaten from './Eaten';

class Day extends React.Component {
	
	state = {
		done: false
	}  

	isDone = () => {
		this.setState(prevState => ({
			done: !prevState.done
		}));
	}


	render() {
		return (
			<ul className="day">
				<li>DAY {this.props.weekDay + 7*(this.props.state.currentWeek -1)}</li>
				<li>
					{this.props.option.h6am.desc}
					<Eaten addMeals={this.props.addMeals} />
				</li>
				<li>
					{this.props.option.h9am}
					<Eaten addMeals={this.props.addMeals} />
				</li>
				<li>
					{this.props.option.h12pm.desc}
					<Eaten addMeals={this.props.addMeals} />
				</li>
				<li>
					{this.props.option.h3pm}
					<Eaten addMeals={this.props.addMeals} />
				</li>
				<li>
					{this.props.option.h6pm}
					<Eaten addMeals={this.props.addMeals} />
				</li>
				<li>
					<span className="workout">
						<p>{this.props.option.carb}</p>
						<div className={(this.state.done)?'iconsDone':'icons'}>
							<FontAwesomeIcon 
								icon="dumbbell" 
								className="dumbbell" 
								onClick={() => {
										this.props.addWorkout(this.state.done);
										this.isDone();
										}
								}
							/>
							<FontAwesomeIcon icon="check" className="check"/>
						</div>
					</span>
				</li>
			</ul>
		)
	}
}
export default Day;