import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './index.css'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<main>
					<Container>
						<Content />
					</Container>
				</main>
				<Footer />
			</Fragment>
		)
	}
}

export default App
