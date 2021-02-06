import React from 'react';
import renderer from 'react-test-renderer';

// REDUX
import { Provider } from 'react-redux';
import store from '../../src/redux'

import User from '../../src/components/User/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<User />', () => {
    it('render User Component correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <User 
                    user={
                        {
                            name: 'Snapshot',
                            document: 11111111111,
                            type: 'individual',
                        }
                    }
                />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});