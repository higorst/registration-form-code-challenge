import styled from 'styled-components/native'
import { Dimensions, ViewProps } from 'react-native'
import { Colors } from '../../styles/Colors'

interface PropsTypeUser extends ViewProps {
    color: string
}
interface PropsCard extends ViewProps {
    borderColor: string
}

export const Touchable = styled.TouchableOpacity`
    padding: 5px;
    justify-content: center;
    align-items: center;

    border-radius: 5px; 

    background-color: ${Colors.red};
`
export const Card = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px;
    margin: 5px;

    border-width: 2px;
    border-color: ${(props: PropsCard) => props.borderColor };
    border-radius: 10px;
`
export const UserAndType = styled.View<ViewProps>`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
`
export const DocumentAndButton = styled.View<ViewProps>`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2px;
    margin-left: 35px;
`
export const TypeUser = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 20px;

    background-color: ${(props: PropsTypeUser) => props.color };
`
export const NameUser = styled.Text`
    color: ${Colors.white};
    text-align: center;  
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
`
export const DocumentUser = styled.Text`
    color: ${Colors.white};
    text-align: center;  
    font-style: italic;
    font-size: 16px;
`