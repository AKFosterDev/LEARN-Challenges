import React, { Component } from 'react'
import MadLibsForm from './components/MadLibForm'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Mad Libs App</h1>
				<MadLibsForm />
			</div>
		)
	}
}

export default App
