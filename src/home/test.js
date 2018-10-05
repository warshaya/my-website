import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from '.'

configure({adapter: new Adapter()})

it('returns a nonnull object', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper).toBeDefined()
})

