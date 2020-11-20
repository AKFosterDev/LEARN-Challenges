import React, { Component, Fragment } from 'react'
import Counter from './components/Counter'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			banana: 'banana',
			numbers: [2, 3, 4, 5, 6, 7],
		}
	}

	handleMessage = (here) => {
		alert(here)
	}

	render() {
		return (
			<Fragment>
				{this.state.numbers.map((value, index) => {
					return (
						<Counter
							value={value}
							key={index}
							index={index}
							handleMessage={this.handleMessage}
						/>
					)
				})}
			</Fragment>
		)
	}
}

export default App
