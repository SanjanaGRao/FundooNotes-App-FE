import React from 'react';
import App from "./App";
import { shallow } from "enzyme";
import App from '../src/App';
import Router from './router';

describe('App', () => {
  it("renders without crashing", () => {
    shallow(<App/>);
  });

	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});

it("should render the Router Component", () => {
  const container = shallow(<App />);
  expect(container.containsMatchingElement(<Router/>)).toEqual(true);
})
});