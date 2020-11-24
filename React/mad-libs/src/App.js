import React, { Component } from 'react'
import MadLibsForm from './components/MadLibForm'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formData: null,
		}
	}

	handleFormSubmit = (form) => {
		this.setState({ formData: form })
	}

	render() {
		return (
			<div className='App'>
				<h1>Mad Libs App</h1>
				<MadLibsForm handleFormSubmit={this.handleFormSubmit} />
				{this.state.formData && (
					<div>
						<p>{this.state.formData.place}</p>
					</div>
				)}
			</div>
		)
	}
}

export default App
