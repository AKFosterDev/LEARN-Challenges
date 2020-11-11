import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../index.css'

class Header extends Component {
	render() {
		return (
			<Container>
				<h1 className='text-center py-3 title'>About Us</h1>
			</Container>
		)
	}
}

export default Header
