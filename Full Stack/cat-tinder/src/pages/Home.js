import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import bgImage from '../assets/cat1.jpg'

class Home extends Component {
	render() {
		return (
			<Jumbotron
				className='jumbo-img'
				style={{
					backgroundImage: `url(${bgImage})`,
					// backgroundSize: 'cover',
					// height: '100vh',
					// display: 'flex',
					// flexDirection: 'column',
					// justifyContent: 'center',
					// alignItems: 'flex-start',
					// color: 'black',
				}}
			>
				<h1>Welcome to Cat Tinder</h1>
				<p>It's like Tinder but for cats!</p>
				{/* <p>
					<Button variant='primary'>Login</Button>{' '}
					<Button variant='primary'>Sign Up</Button>
				</p> */}
			</Jumbotron>
		)
	}
}

export default Home
