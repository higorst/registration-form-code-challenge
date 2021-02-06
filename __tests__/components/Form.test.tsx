import React from 'react';
import renderer from 'react-test-renderer';

// REDUX
import { Provider } from 'react-redux';
import store from '../../src/redux'

import Form from '../../src/components/Form/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<Form />', () => {
    it('renders Form Component correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Form />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});