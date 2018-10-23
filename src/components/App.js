import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPrint, faCircle, faGrin} from '@fortawesome/free-solid-svg-icons';

library.add(faDumbbell, faPrint, faCircle, faGrin);

class App extends React.Component {

	state = {
		currentWeek: 1,
		workOuts: 0,
		fish: true,
		beef: true,
		chicken: true,
		apple: true,
		bread: true,
		meals: {
			shake: 0,
			steak: 0,
			turkey: 0,
			garlic: 0,
			ham: 0,
			mozarella: 0,
			muffin: 0
		}
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

	render() {
		return (
			<div className="app">
				<Header state={this.state} 
						prevWeek={this.prevWeek} 
						nextWeek={this.nextWeek}
						breadSelect={this.breadSelect}
						appleSelect={this.appleSelect}
						fishSelect={this.fishSelect}
						chickenSelect={this.chickenSelect}
						beefSelect={this.beefSelect}
				/>
				<Calendar state={this.state} />
				<Footer />	
			</div>
		);
	}
}

export default App;