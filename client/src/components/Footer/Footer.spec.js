import React from 'react';
import Footer from './Footer';

describe('Footer component', () => {
    it('Footer component render', () => {
        const wrapper  = shallow(<Footer />)
        expect(wrapper).toMatchSnapshot()
    })
})