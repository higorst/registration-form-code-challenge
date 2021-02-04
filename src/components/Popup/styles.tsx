import styled from 'styled-components/native'
import { Dimensions, ViewProps } from 'react-native'
import { Colors } from '../../styles/Colors'

export const Message = styled.Text`
    font-size: 20px;
    text-align: center;

    margin-left: 10px;
    margin-right: 10px;
    margin-top: 40px;
    margin-bottom: 20px;
    max-width: ${`${Dimensions.get('window').width * 0.6}px`};

    font-weight: bold;
    color: ${Colors.backgroundApp};
`