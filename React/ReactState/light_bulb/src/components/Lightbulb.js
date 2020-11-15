import React, { Component, Fragment } from 'react'

import lightOff from '../assets/lightOff.png'
import lightOn from '../assets/lightOn.png'
import switchOff from '../assets/switchOff.png'
import switchOn from '../assets/switchOn.png'

class Lightbulb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			lightOn: false,
			boxColor: '',
		}
	}

	flipSwitchHandler = () => {
		this.state.lightOn
			? this.setState({ lightOn: false, boxColor: 'white' })
			: this.setState({ lightOn: true, boxColor: 'yellow' })
	}

	render() {
		return (
			<Fragment>
				{this.state.lightOn ? <img src={lightOn} /> : <img src={lightOff} />}
				{/* Toggle ON/Off switch based on state */}
				{this.state.lightOn ? (
					<img src={switchOn} onClick={this.flipSwitchHandler} />
				) : (
					<img src={switchOff} onClick={this.flipSwitchHandler} />
				)}
			</Fragment>
		)
	}
}

export default Lightbulb
