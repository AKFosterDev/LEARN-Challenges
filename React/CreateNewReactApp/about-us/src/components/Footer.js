import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {
	render() {
		return (
			<Container className='my-3'>
				<Row>
					<Col className='text-center'>Partner One &amp; Partner Two </Col>
				</Row>
				<Row>
					<Col className='text-center'>Echo 2020 | LEARN Academy </Col>
				</Row>
			</Container>
		)
	}
}

export default Footer
