import React from 'react'
import { Colors } from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, UserAndType, DocumentAndButton, TypeUser, NameUser, DocumentUser, Touchable } from './styles'
import RegexControllers from '../../controllers/Regexcontrollers';

import { Constants } from '../../constants';

interface UserType {
    user: {
        name: string
        document: number
        type: string
    }

    delete?: any
}
function User(props: UserType) {

    return (
        <Card
            borderColor={(props.user.type === Constants.typeUserDataIndividual) ? Colors.individual : Colors.business}
        >
            <UserAndType>
                <TypeUser
                    color={(props.user.type === Constants.typeUserDataIndividual) ? Colors.individual : Colors.business}
                />
                <NameUser>{props.user.name}</NameUser>
            </UserAndType>
            <DocumentAndButton>
                <DocumentUser>{
                    RegexControllers.handleRegex(props.user.type === Constants.typeUserDataIndividual, props.user.document.toString(), true)
                }</DocumentUser>
                <Touchable
                    onPress={() => props.delete({
                        name: props.user.name,
                        document: props.user.document,
                        type: props.user.type
                    })}
                >
                    <Icon
                        name={Constants.iconButtonRemoveUser}
                        size={20}
                        color={Colors.white}
                    />
                </Touchable>
            </DocumentAndButton>
        </Card>
    )
}

export default User