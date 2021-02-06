import React from 'react';
import renderer from 'react-test-renderer';
import TouchableSendButton from '../../src/components/TouchableSendButton/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<TouchableSendButton />', () => {
    it('renders TouchableSendButton Component correctly', () => {
        const tree = renderer.create(
            <TouchableSendButton
                title='Enviado Snapshot'
                color='#013893'
                onPress={() => {}}
                sending={false}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});