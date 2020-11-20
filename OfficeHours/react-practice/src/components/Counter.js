import React, { Component } from 'react'

class Counter extends Component {
	render() {
		const { value, index, handleMessage } = this.props
		return (
			<div>
				<h3>Value: {value}</h3>
				<h3>Index: {index}</h3>
				<button onClick={() => handleMessage(value)}>
					{' '}
					Supper Awesome Button
				</button>
			</div>
		)
	}
}

export default Counter
