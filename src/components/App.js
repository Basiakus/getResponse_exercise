import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import Footer from './Footer';
import Nav from './Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPrint, faCircle, faGrin, faCheck} from '@fortawesome/free-solid-svg-icons';

library.add(faDumbbell, faPrint, faCircle, faGrin, faCheck);

class App extends React.Component {

	state = {
		currentWeek: 1,
		workOuts: 0,
		meals: 0,
		fish: true,
		beef: true,
		chicken: true,
		apple: true,
		bread: true
	}
	
	nextWeek = () => {
		if(this.state.currentWeek >= 12) {
			return this.setState({
				currentWeek: 1,
			})
		}
		this.setState( prevState => ({
			currentWeek: prevState.currentWeek + 1
		}));
	}

	prevWeek = () => {
		if(this.state.currentWeek <= 1) {
			return this.setState({
				currentWeek: 12
			})
		}
		this.setState(prevState => ({
			currentWeek: prevState.currentWeek - 1
		}));
	}

	breadSelect = () => {
		this.setState(prevState => ({
			bread: !prevState.bread
		}));
	}

	appleSelect = () => {
		this.setState(prevState => ({
			apple: !prevState.apple
		}));
	}

	beefSelect = () => {
		this.setState(prevState => ({
			beef: !prevState.beef
		}));
	}

	fishSelect = () => {
		this.setState(prevState => ({
			fish: !prevState.fish
		}));
	}

	chickenSelect = () => {
		this.setState(prevState => ({
			chicken: !prevState.chicken
		}));
	}

	addWorkout = (isDone) => {
		(!isDone) ?
			this.setState(prevState => ({
				workOuts: prevState.workOuts +1
			})) :
			this.setState(prevState => ({
				workOuts: prevState.workOuts -1
			}))
	}

	addMeals = (isEaten) => {
		(!isEaten) ?
			this.setState(prevState => ({
				meals: prevState.meals +1
			})) :
			this.setState(prevState => ({
				meals: prevState.meals -1
			}))
	}

	render() {
		return (
			<div className="app">
				<Nav />
				<Header state={this.state} 
						prevWeek={this.prevWeek} 
						nextWeek={this.nextWeek}
						breadSelect={this.breadSelect}
						appleSelect={this.appleSelect}
						fishSelect={this.fishSelect}
						chickenSelect={this.chickenSelect}
						beefSelect={this.beefSelect}
				/>
				<Calendar 
					state={this.state} 
					addWorkout={this.addWorkout}
					addMeals={this.addMeals}
				/>
				<Footer />	
			</div>
		);
	}
}

export default App;