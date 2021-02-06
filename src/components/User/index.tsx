import React, { useState } from 'react'
import { Colors } from '../../styles/Colors';

import { Card, Row, TypeUser, NameUser, Message } from './styles'
import RegexControllers from '../../controllers/Regexcontrollers';

// Redux
import { connect } from "react-redux";
import { SAGA_DELETE } from '../../redux/sagas/types';

import { Constants } from '../../constants';
import { Button } from 'react-native';

interface UserType {
    user: {
        name: string
        document: number
        type: string
    }

    dispatch?: any
}
const User = (props: UserType) => {

    const [showPopup, setShowPopup] = useState(false)

    function handleDelete() {
        setShowPopup(false)
        props.dispatch({ type: SAGA_DELETE, register: {
            name: props.user.name,
            document: props.user.document,
            type: props.user.type
        } })
    }

    return (
        <Card borderColor={(props.user.type === Constants.typeUserDataIndividual) ? Colors.individual : Colors.business}>
            <Row>
                <TypeUser color={(props.user.type === Constants.typeUserDataIndividual) ? Colors.individual : Colors.business}/>
                <NameUser>{props.user.name}</NameUser>
            </Row>
            {
                showPopup && <Row>
                    <Message italic marginLeft>{Constants.messageConfirmRemove}</Message>
                    <Button title={Constants.titleButtonNo} color={Colors.business} onPress={() => setShowPopup(false)} />
                    <Button title={Constants.titleButtonYes} color={Colors.red} onPress={handleDelete} />
                </Row>
            }
            {
                !showPopup &&
                <Row>
                    <Message italic marginLeft>{
                        RegexControllers.handleRegex(props.user.type === Constants.typeUserDataIndividual, props.user.document.toString(), true)
                    }</Message>
                    <Button title={Constants.titleButtonRemove} color={Colors.red} onPress={() => setShowPopup(true)} />
                </Row>
            }
        </Card>
    )
}

export default connect()(User)