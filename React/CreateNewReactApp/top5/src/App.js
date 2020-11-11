import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Favorites from './components/Favorites'
import './App.css'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Favorites />
			</Fragment>
		)
	}
}

export default App
