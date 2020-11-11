import React, { Component, Fragment } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

class Favorites extends Component {
	render() {
		return (
			<Fragment>
				<Container>
					<Row>
						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='http://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg'
								/>
								<Card.Body>
									<Card.Title>The Matrix</Card.Title>
									<Card.Text>
										Set in the 22nd century, The Matrix tells the story of a
										computer hacker who joins a group of underground insurgents
										fighting the vast and powerful computers who now rule the
										earth.
									</Card.Text>
									<Button variant='primary'>Check it Out</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='http://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg'
								/>
								<Card.Body>
									<Card.Title>The Greatest Showman</Card.Title>
									<Card.Text>
										The story of American showman P.T. Barnum, founder of the
										circus that became the famous traveling Ringling Bros. and
										Barnum & Bailey Circus.
									</Card.Text>
									<Button variant='primary'>Check it Out</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='http://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg'
								/>
								<Card.Body>
									<Card.Title>Kill Bill Vol 2</Card.Title>
									<Card.Text>
										The Bride unwaveringly continues on her roaring rampage of
										revenge against the band of assassins who had tried to kill
										her and her unborn child. She visits each of her former
										associates one-by-one, checking off the victims on her Death
										List Five until there's nothing left to do … but kill Bill.
									</Card.Text>
									<Button variant='primary'>Check it Out</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='http://image.tmdb.org/t/p/w500/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg'
								/>
								<Card.Body>
									<Card.Title>The Usual Suspects</Card.Title>
									<Card.Text>
										Held in an L.A. interrogation room, Verbal Kint attempts to
										convince the feds that a mythic crime lord, Keyser Soze, not
										only exists, but was also responsible for drawing him and
										his four partners into a multi-million dollar heist that
										ended with an explosion in San Pedro harbor – leaving few
										survivors. Verbal lures his interrogators with an incredible
										story of the crime lord's almost supernatural prowess.
									</Card.Text>
									<Button variant='primary'>Check it Out</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='http://image.tmdb.org/t/p/w500/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg'
								/>
								<Card.Body>
									<Card.Title>The Departed</Card.Title>
									<Card.Text>
										To take down South Boston's Irish Mafia, the police send in
										one of their own to infiltrate the underworld, not realizing
										the syndicate has done likewise. While an undercover cop
										curries favor with the mob kingpin, a career criminal rises
										through the police ranks. But both sides soon discover
										there's a mole among them.
									</Card.Text>
									<Button variant='primary'>Check it Out</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default Favorites
