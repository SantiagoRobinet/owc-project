import renderer from 'react-test-renderer';
import React from 'react';
import HomeComponent from './Home';

describe('Home snapshot', () => {
    const props = {
        label: 'click me'
    }
    const homeTree = renderer.create(
        <HomeComponent {...props} />
    );
    it('should match', () => {
        expect(homeTree.toJSON()).toMatchSnapshot();
    });

});