import React from 'react';
import { shallow } from 'enzyme';
import Router from './router'; 
describe('Router', () => {
    it("renders without crashing", () => {
      shallow(<Router/>);
    });
});