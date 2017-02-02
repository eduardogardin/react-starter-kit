/**
 * Required import for test apps
 */
import React from 'react';

/**
 * Testing tools
 */
import { mount } from 'enzyme';
import { expect } from 'chai';

/**
 * Components to test
 */
import App from '../App.jsx';

describe('<App />', () => {

    it('Should render main div', () => {
        
        expect(mount(<App />).find('#mainDiv').length).to.equal(1);        
    });
});