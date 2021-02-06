import styled from 'styled-components/native'
import { Dimensions, ViewProps } from 'react-native'
import { Colors } from '../../styles/Colors'

interface PropsTypeUser extends ViewProps {
    color: string
}
interface CardType extends ViewProps {
    borderColor: string
}
interface TouchableType extends ViewProps {
    color: string
}
interface MessageType extends ViewProps {
    italic?: boolean
    marginLeft?: boolean
}

export const Message = styled.Text`
    font-size: 16px;
    text-align: center;
    max-width: ${`${Dimensions.get('window').width * 0.6}px`};

    font-style: ${(props: MessageType) => props.italic ? 'italic' : 'normal' };
    margin-left: ${(props: MessageType) => props.marginLeft ? 
                    `${Dimensions.get('window').width * 0.09}px` : '0px' };
    color: ${Colors.white};
`
export const Card = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px;
    margin: 5px;

    border-width: 2px;
    border-color: ${(props: CardType) => props.borderColor };
    border-radius: 10px;
`

export const Row = styled.View<ViewProps>`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 3px;
`
export const TypeUser = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 20px;

    background-color: ${(props: PropsTypeUser) => props.color };
`
export const NameUser = styled.Text`
    color: ${Colors.white};
    width: ${`${Dimensions.get('window').width * 0.78}px`};

    text-align: left;  
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`