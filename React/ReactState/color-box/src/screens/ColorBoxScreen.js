import React, { Component, Fragment } from 'react'
import { Container, Button } from 'react-bootstrap'
import ColorBox from '../components/ColorBox'

class ColorBoxScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colorBoxes: [],
		}
	}

	addColorBox = () => {
		this.setState({ colorBoxes: this.state.colorBoxes.push(<ColorBox />) })
	}

	render() {
		return (
			<Fragment>
				<Container>{this.state.colorBoxes}</Container>

				<Container>
					<Button onClick={this.addColorBox} variant='light' block>
						Add Color Box
					</Button>
					<Button onClick={this.removeColorBox} variant='dark' block>
						Remove Color Box
					</Button>
				</Container>
			</Fragment>
		)
	}
}

export default ColorBoxScreen
