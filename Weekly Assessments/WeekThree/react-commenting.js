// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags

// src/App.js

import React, { Component } from 'react'
// 1) This imports the Dice component into Board component so that it can be used in the Board component.
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component {
	// 2) This is calling the constructor method which is used to define the inital data within the component. Props are the arguments passed to the component. The constructor method is a lifecycle method and is the first method called when component is loaded.
	constructor(props) {
		super(props)
		// 3) This is setting the initial values in the state object that are being used within our app.
		this.state = {
			rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
			currentPic: dice,
			diceLog: [],
		}
	}

	handleRoll = () => {
		// 4) This is destructuring these two items from state to be used within this method
		let { rollImages, diceLog } = this.state
		// 5) This is setting a random number to the variable of randomNum based on the length of the rollImages array.
		let randomNum = Math.ceil(Math.random() * rollImages.length)
		let newRoll = rollImages[randomNum]
		// 6) This is setting the state to reflect the newRoll picture based on the random number that was gotten from the randomNum call above and using the spread operator to bring in all dice rolls that were in state and adding the new one.
		this.setState({ currentPic: newRoll, diceLog: [...diceLog, newRoll] })
	}

	// 7) This is the method that actually shows information within the browser
	render() {
		const { currentPic, diceLog } = this.state
		return (
			<div id='board-container'>
				{/* 8) This is calling a component instance that will be rendered to the screen. */}
				<Dice
					// 9) This is setting the prop that is being used to call the above method that handles the dice roll logic.
					roll={this.handleRoll}
					currentPic={currentPic}
				/>
				<Log diceLog={diceLog} />
			</div>
		)
	}
}

// 10) This is exporting the Board component so that it can be used elsewhere in the app. Most likely in App.js.
export default Board
