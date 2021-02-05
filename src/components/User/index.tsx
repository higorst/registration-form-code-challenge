import React, { useState } from 'react'
import { Colors } from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Card, UserAndType, DocumentAndButton, TypeUser, NameUser, DocumentUser, Touchable } from './styles'
import Popup from '../Popup';
import RegexControllers from '../../controllers/Regexcontrollers';

// Redux
import { connect } from "react-redux";
import { SAGA_DELETE } from '../../redux/sagas/types';

import { Constants } from '../../constants';

interface UserType {
    user: {
        name: string
        document: number
        type: string
    }

    delete?: any
}
const User = (props: UserType) => {

    const [showPopup, setShowPopup] = useState(false)

    return (
        <Card
            borderColor={(props.user.type === Constants.typeUserDataIndividual) ? Colors.individual : Colors.business}
        >
            <Popup
                visible={showPopup}
                onCancel={() => setShowPopup(false)}
                user_name={props.user.name}
                onOk={() => {
                    setShowPopup(false)
                    props.delete({
                        name: props.user.name,
                        document: props.user.document,
                        type: props.user.type
                    })
                }}
            />
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
                    onPress={() => setShowPopup(true)}
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

const mapDispatchToProps = (dispatch: any) => ({
    delete: (data: UserType) => dispatch({ type: SAGA_DELETE, register: data }, dispatch),
})
export default connect(
    mapDispatchToProps,
)(User)