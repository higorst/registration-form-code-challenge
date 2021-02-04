import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { Colors } from '../../styles/Colors'

export const Row = styled.KeyboardAvoidingView`
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
    width: ${`${Dimensions.get('window').width * 0.9}px`};
`

export const TextError = styled.Text`
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    color: ${Colors.infoError};

    margin-left: 20px;
    margin-bottom: 10px;
`

export const TextInfo = styled.Text`
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    color: ${Colors.white};
`