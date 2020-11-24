import React, { Component, Fragment } from 'react'
import Square from './components/Square'
import './App.css'
import turtle from './assets/turtle.svg'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			squares: [
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
			],
			treasureLocation: null,
			bombLocation: null,
			counter: 15,
			gameOver: false,
		}
	}

	componentDidMount() {
		// when component loads call newGame setup
		this.newGame()
	}

	newGame = () => {
		// destructure squares from state
		const { squares } = this.state
		// set location of treasure based on random number
		let treasure = Math.floor(Math.random() * squares.length)
		// set location of treasure based on random number
		let bomb = Math.floor(Math.random() * squares.length)
		// if treasure and bomb at same location reassign bomb
		if (treasure === bomb) {
			bomb = Math.floor(Math.random() * squares.length)
		}
		// update state to reflect treasure and bomb locations
		this.setState({ treasureLocation: treasure, bombLocation: bomb })
	}

	restartGame = () => {
		// reset state to initial state
		this.setState({
			squares: [
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
				'?',
			],
			treasureLocation: null,
			bombLocation: null,
			counter: 15,
			gameOver: false,
		})
		// calls newGame method to reset treasure and bomb location
		this.newGame()
	}

	handleGamePlay = (index) => {
		const {
			squares,
			treasureLocation,
			bombLocation,
			counter,
			gameOver,
		} = this.state
		// create count variable to hold count down
		let count = counter - 1
		// if index = treasure & game not over & counter more than 0 set square to treasure
		if (index === treasureLocation && !gameOver && counter > 0) {
			// set squares index to treasure
			squares[index] = '💰'
			this.setState({ squares: squares, gameOver: 'win' })
		} else if (index === bombLocation && !gameOver && counter > 0) {
			// if index = bomb location , game not over and counter more than 0
			// set square to bomb and game over
			squares[index] = '💣'
			this.setState({ squares: squares, gameOver: 'lose' })
		} else if (!gameOver && counter > 0 && squares[index] === '?') {
			// if game not over and counter more than 0 and index still set to ? set squares[index] to tree
			squares[index] = '🌴'
			this.setState({ squares: squares, counter: count })
		}
	}

	render() {
		// destructure squares from state
		let { squares, counter, gameOver } = this.state
		return (
			<Fragment>
				<div className='container'>
					<h1>Treasure Hunt Game</h1>
					<h3 id='counter'>Counter: {counter}</h3>
					<div id='board'>
						{squares.map((value, index) => {
							return (
								<Square
									value={value}
									key={index}
									index={index}
									handleGamePlay={this.handleGamePlay}
								/>
							)
						})}
					</div>
					{gameOver === 'win' && (
						<div className='endGameMessage'>
							<h3>Winner, Winner, Chicken Dinner! You found the treasure! </h3>
							<button onClick={this.restartGame}>Play Again</button>
						</div>
					)}
					{(gameOver === 'lose' || counter === 0) && (
						<div className='endGameMessage'>
							<h3>Uh oh! You lost the game... </h3>
							<button onClick={this.restartGame}>Try Again</button>
						</div>
					)}
				</div>
			</Fragment>
		)
	}
}

export default App
