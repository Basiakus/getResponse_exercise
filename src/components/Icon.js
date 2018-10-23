import React from 'react';

class Icon extends React.Component {

	render() {
		return (
			<div className={(this.props.state)?'selected': 'unselected'}>
				{this.props.character}
			</div>
		)
	}

}

export default Icon;