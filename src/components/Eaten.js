import React from 'react';

class Eaten extends React.Component {

	state = {
		eaten: false
	}  

	isEaten = () => {
		this.setState(prevState => ({
			eaten: !prevState.eaten
		}));
	}

	render() {
		return (
			<div 
				className={(this.state.eaten)?"notEaten":"eaten"}
				onClick={ 
					() => {
						this.isEaten();
						this.props.addMeals(this.state.eaten);
					}
				}
			>
				<p> Done ! </p>
			</div>
		)
	}
}

export default Eaten;