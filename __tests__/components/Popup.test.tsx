import React from 'react';
import renderer from 'react-test-renderer';
import Popup from '../../src/components/Popup/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<Popup />', () => {
    it('renders Popup Component correctly', () => {
        const tree = renderer.create(
            <Popup
                visible={true}
                onCancel={() => {}}
                user_name='Snapshot'
                onOk={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});