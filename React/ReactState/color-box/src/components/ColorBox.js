import React, { Component, Fragment } from 'react'

class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
			currentColor: '',
		}
	}

	onClickHandler = () => {
		let randomIndex = Math.floor(Math.random() * this.state.colors.length)
		this.setState({ currentColor: this.state.colors[randomIndex] })
	}

	render() {
		const styleObject = {
			background: this.state.currentColor,
			color: this.state.currentColor === 'yellow' ? 'black' : 'white',
		}

		return (
			<Fragment>
				<button
					className='colorBtn'
					style={styleObject}
					onClick={this.onClickHandler}
					// value={this.state.color}
				>
					{this.state.currentColor}
				</button>
			</Fragment>
		)
	}
}

export default ColorBox
