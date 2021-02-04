import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { Colors } from '../../styles/Colors'

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
    width: ${`${Dimensions.get('window').width}px`};
    background-color: ${Colors.backgroundApp};

    margin-top: 20px;
    margin-bottom: 20px;

    padding: 10px;
`