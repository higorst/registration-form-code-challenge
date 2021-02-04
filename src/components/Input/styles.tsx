import styled from 'styled-components/native'
import { Dimensions, TextInputProps } from 'react-native'
import { Colors } from '../../styles/Colors'

export const InputText = styled.TextInput<TextInputProps>`
    /* component */
    padding: 10px;
    margin: 5px;
    margin-bottom: 10px;
    width: ${`${Dimensions.get('window').width * 0.9}px`};

    align-self: center;
    align-content: center;

    border-radius: 10px; 
    background-color: ${Colors.white};

    /* text */
    font-size: 16px;
`