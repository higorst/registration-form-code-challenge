import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../src/components/Input/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<Input />', () => {
    it('renders Input Component correctly', () => {
        const tree = renderer.create(
                <Input
                    value='Snapshot'
                    placeholder='Snapshot'
                    onChangeText={() => {}}
                    sending={false}
                />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});