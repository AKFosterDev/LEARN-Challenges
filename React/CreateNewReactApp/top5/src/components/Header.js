import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class Header extends Component {
	render() {
		return (
			<Container>
				<h1 className='text-center py-3 title'>Our Top 5 Movies</h1>
			</Container>
		)
	}
}

export default Header
