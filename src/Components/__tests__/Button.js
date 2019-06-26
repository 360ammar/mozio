    import React from 'react';
    import * as enzyme from 'enzyme';
    import Button from '../Button';

    describe('Button component', () => {
      it('starts with a count of 0', () => {
        const wrapper = enzyme.shallow(<Button>Button</Button>);
        const text = wrapper.find('button').text();
        expect(text).toEqual('Button');
      });
    });