import React from 'react';
import renderer from 'react-test-renderer';

// REDUX
import { Provider } from 'react-redux';
import store from '../../src/redux'

import Home from '../../src/pages/Home/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<Home />', () => {
    it('renders home correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});