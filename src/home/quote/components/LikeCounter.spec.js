import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
// the expect-jsx library helps us make sure that the LikeCounter component
// is outputting the string five likes,
// regardless where those five likes are in the component tree
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import LikeCounter from './LikeCounter';

describe('LikeCounter', () => {
    it('should render like counts', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LikeCounter count={5} />);
        const actual = renderer.getRenderOutput();
        const expected = '5 likes';
        expect(actual).toIncludeJSX(expected);
    });
});