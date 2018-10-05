import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from './home'

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('contains a child Home', () => {
  const wrapper = shallow(<App />)
  console.log(wrapper.find(Home))
})
