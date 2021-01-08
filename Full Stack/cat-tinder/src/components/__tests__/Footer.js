import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
	const footer = shallow(<Footer />)
	expect(footer.find('p').text()).toEqual('Alejandro & Amanda | &#169; 2021')
})
