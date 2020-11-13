import React, { Component } from 'react'

class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: 'blue',
		}
	}

	onClickHandler() {
		// array of colors to be iterated and used to set new state
		const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
		// on click of button iterates to the next item in the array of colors
		// color state is updated to the current value in the array

		const newColor = colors.map(color => {
			return console.log(color)
		})
		this.setState({ color: newColor })
	}

	render() {
		const styleObject = {
			background: this.state.color,
			color:
				this.state.color === 'white' || this.state.color === 'yellow'
					? { color: 'black' }
					: { color: 'white' },
			fontWeight: 'bold',
		}

		return (
			<div>
				<button
					style={styleObject}
					onClick={this.onClickHandler}
					// value={this.state.color}
				>
					{this.state.color}
				</button>
				{/* <input
					type='text'
					// onChange={this.onChangeHandler}
					// value={this.state.color}
				/> */}
			</div>
		)
	}
}

export default ColorBox
