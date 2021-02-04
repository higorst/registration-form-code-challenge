import styled from 'styled-components/native'
import { TouchableOpacityProps, TextProps, Dimensions } from 'react-native'
import { Colors } from '../../styles/Colors'

interface ButtonType extends TouchableOpacityProps {
    color?: string
    sending?: boolean
}
interface TitleButtonType extends TextProps {
    color?: string
    fontSize?: number
}

export const TitleButton = styled.Text`
    color: #ffffff;
    text-align: center;  
    font-weight: bold;
    font-size: ${(props: TitleButtonType) => `${props.fontSize}px` || `20px`};
`

export const Touchable = styled.TouchableOpacity`
    padding: 15px;
    width: ${`${Dimensions.get('window').width * 0.9}px`};

    align-self: center;
    align-content: center;
    justify-content: center;

    border-radius: 10px; 
    flex-direction: row;

    justify-content: space-evenly;
    align-items: center;

    border-width: 2px;

    z-index: 5;
    border-color: ${(props: ButtonType) => 
        props.sending ? Colors.white : Colors.backgroundApp};
    background-color: ${(props: ButtonType) => 
        props.sending ? Colors.backgroundApp : 
        props.color ? props.color : Colors.primary};
`