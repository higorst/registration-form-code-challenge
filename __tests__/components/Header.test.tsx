import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header/index'

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('<Header />', () => {
    it('renders Header Component correctly', () => {
        const tree = renderer.create(
                <Header title="Snapshot"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});