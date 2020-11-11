import React, { Component, Fragment } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import '../content.css'

class Content extends Component {
	render() {
		return (
			<Fragment>
				<Container className='d-flex align-items-center justify-content-center'>
					<Row>
						<Col>
							<Card className='card shadow-lg m-4'>
								<div className='overflow'>
									<Card.Img
										className='card-img'
										variant='top'
										src='amanda.png'
									/>
								</div>

								<Card.Body>
									<Card.Title className='text-center'>Amanda Foster</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className='card shadow-lg m-4'>
								<div className='overflow'>
									<Card.Img
										className='card-img'
										variant='top'
										src='amanda.png'
									/>
								</div>

								<Card.Body>
									<Card.Title className='text-center'>Partner Two</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default Content
