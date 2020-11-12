import React, { Component } from 'react'

class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
			color: 'white',
		}
	}

	onClickHandler(e) {
		// e.preventDefault()
		// let newColor =
		this.state.colors.map(color => {
			this.setState({ color })
		})
		// this.setState((color: newColor))
	}

	render() {
		const styleObject = {
			background: this.state.color,
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
