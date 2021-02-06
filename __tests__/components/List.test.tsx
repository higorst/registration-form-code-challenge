import React from 'react';
import renderer from 'react-test-renderer';

// REDUX
import { Provider } from 'react-redux';
import store from '../../src/redux'

import List from '../../src/components/List/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<List />', () => {
    it('renders List Component correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <List
                    users={[
                        {
                            name: 'Snapshot',
                            document: 11111111111,
                            type: 'individual',
                        }
                    ]}
                    isRefreshing={false}
                    onRefresh={() => {}}
                />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});