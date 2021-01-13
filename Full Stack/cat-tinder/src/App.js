import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import CatEdit from './pages/CatEdit.js'
import CatIndex from './pages/CatIndex.js'
import CatNew from './pages/CatNew.js'
import CatShow from './pages/CatShow.js'
import NotFound from './pages/NotFound.js'

// import cats from './mockCats.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cats: [],
		}
	}

	componentDidMount() {
		this.catIndex()
	}

	catIndex = () => {
		fetch('http://localhost:3000/cats')
			.then((response) => {
				return response.json()
			})
			.then((catsArray) => {
				// set the state with the data from the backend into the empty array
				this.setState({ cats: catsArray })
			})
			.catch((errors) => {
				console.log('index errors:', errors)
			})
	}

	// newcat object from form
	createCat = (newcat) => {
		fetch('http://localhost:3000/cats', {
			// converting an object to a string
			body: JSON.stringify(newcat),
			// specify the info being sent in JSON and the info returning should be JSON
			headers: {
				'Content-Type': 'application/json',
			},
			// HTTP verb so the correct endpoint is invoked on the server
			method: 'POST',
		})
			.then((response) => {
				console.log('response', response)
				return response.json()
			})
			.then((payload) => {
				console.log(payload)
				this.catIndex()
			})
			.catch((errors) => {
				console.log('create errors:', errors)
			})
	}

	updateCat = (cat, id) => {
		console.log('cat:', cat)
		console.log('id:', id)
	}
	// updateCat = (editcat, id) => {
	// 	fetch('http://localhost:3000/cats', {
	// 		// // converting an object to a string
	// 		// body: JSON.stringify(newcat),
	// 		// specify the info being sent in JSON and the info returning should be JSON
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		// HTTP verb so the correct endpoint is invoked on the server
	// 		method: 'POST',
	// 	})
	// 		.then((response) => {
	// 			if (response.status === 422) {
	// 				alert('There is something wrong with your submission.')
	// 			}
	// 			console.log('response:', response)
	// 			return response.json()
	// 		})
	// 		.then((payload) => {
	// 			console.log(payload)
	// 			this.catIndex()
	// 		})
	// 		.catch((errors) => {
	// 			console.log('create errors:', errors)
	// 		})
	// }

	render() {
		console.log(this.state.cats)
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					{/* Static Route */}
					{/* <Route path='/catindex' component={CatIndex} /> */}
					{/* Dynamic Route */}
					<Route
						path='/catindex'
						render={(props) => <CatIndex cats={this.state.cats} />}
					/>
					{/* Static Route */}
					{/* <Route path='/catshow/:id' component={CatShow} /> */}
					{/* Dynamic Route */}
					<Route
						path='/catshow/:id'
						render={(props) => {
							const id = props.match.params.id
							let cat = this.state.cats.find((cat) => cat.id === parseInt(id))
							return <CatShow cat={cat} />
						}}
					/>
					{/* this.state.cats.length > 0 && */}
					{/* Static Route */}
					{/* <Route path='/catnew' component={CatNew} /> */}
					{/* Dynamic Route */}
					<Route
						path='/catnew'
						render={(props) => <CatNew createCat={this.createCat} />}
					/>
					{/* Static Route */}
					{/* <Route path='/catedit' component={CatEdit} /> */}
					{/* Dynamic Route */}
					<Route
						exact
						path='/catedit/:id'
						render={(props) => {
							let id = props.match.params.id
							let cat = this.state.cats.find((cat) => cat.id === parseInt(id))
							return (
								this.state.cats.length > 0 && (
									<CatEdit updateCat={this.updateCat} cat={cat} />
								)
							)
						}}
					/>
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}
export default App
