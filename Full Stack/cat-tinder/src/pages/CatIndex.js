import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
// import cats from '../mockCats'

class CatIndex extends Component {
	render() {
		// console.log(this.props.cats)
		const { cats } = this.props
		return (
			<Fragment>
				<h1 className='title'>The Cats</h1>
				{cats.map((cat, index) => {
					return (
						<a href={`/catshow/${cat.id}`}>
							{' '}
							<p key={index}>{cat.name}</p>
						</a>
					)
				})}
			</Fragment>
		)
	}
}

export default CatIndex
