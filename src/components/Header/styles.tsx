import styled from 'styled-components/native'
import { ViewProps } from 'react-native'
import { Colors } from '../../styles/Colors'



export const TitleHeader = styled.Text`
    color: ${Colors.white};
    text-align: center;  
    font-size: 22px;
`

export const HeaderView = styled.View`
    background-color: ${Colors.headerColor};
    border-color: ${Colors.white};

    padding: 10px;
    margin-bottom: 10px;
    border-bottom-width: 1px;

    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
`