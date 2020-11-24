import React, { Component, Fragment } from 'react'

class MadLibForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				place: '',
				number1: '',
				number2: '',
				adjective1: '',
				noun1: '',
				verb1: '',
				adjective2: '',
				adverb1: '',
				adjective3: '',
				verb2: '',
				verb3: '',
				adjective4: '',
				noun2: '',
				adjective5: '',
				adjective6: '',
				verb4: '',
			},
		}
	}

	handleChange = (e) => {
		let { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleFormSubmit(this.state.form)
	}

	render() {
		return (
			<Fragment>
				<h1>Mad Libs Form</h1>
				<form>
					<label>Proper noun/Place</label>
					<input
						type='text'
						value={this.state.form.place}
						name='place'
						onChange={this.handleChange}
					/>
					<input type='submit' onClick={this.handleSubmit} value='Submit' />
				</form>
			</Fragment>
		)
	}
}

export default MadLibForm
