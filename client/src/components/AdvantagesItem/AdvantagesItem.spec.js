import React from 'react';
import AdvantagesItem from './AdvantagesItem';

describe('AdvantagesItem component', () => {
    it('AdvantagesItem component render', () => {
        const wrapper  = shallow(<AdvantagesItem />)
        expect(wrapper).toMatchSnapshot()
    })
})