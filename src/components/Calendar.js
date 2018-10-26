import React from 'react';
import DayTimes from "./DayTimes";
import Day from "./Day";
import DayOff from "./DayOff";
import mealOptions from '../mealOptionsList.js';
import dayOfWeek from '../DaysOfWeek';
class Calendar extends React.Component {
	render() {
		return (
			<div className="calendar">
				<DayTimes />
				<Day state={this.props.state} weekDay={dayOfWeek.monday} option={mealOptions.option1} addWorkout={this.props.addWorkout} addMeals={this.props.addMeals}/>
				<Day state={this.props.state} weekDay={dayOfWeek.tuesday} option={mealOptions.option2} addWorkout={this.props.addWorkout} addMeals={this.props.addMeals}/>
				<Day state={this.props.state} weekDay={dayOfWeek.wednesday}  option={mealOptions.option1} addWorkout={this.props.addWorkout} addMeals={this.props.addMeals}/>
				<Day state={this.props.state} weekDay={dayOfWeek.thursday}  option={mealOptions.option2} addWorkout={this.props.addWorkout} addMeals={this.props.addMeals}/>
				<Day state={this.props.state} weekDay={dayOfWeek.friday}  option={mealOptions.option1} addWorkout={this.props.addWorkout} addMeals={this.props.addMeals}/>
				<Day state={this.props.state} weekDay={dayOfWeek.saturday} option={mealOptions.option2} addWorkout={this.props.addWorkout} addMeals={this.props.addMeals}/>
				<DayOff state={this.props.state} weekDay={dayOfWeek.sunday} />
			</div>
		)
	}
}

export default Calendar;

