import React from 'react'
import { Colors } from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RegexControllers from '../../controllers/Regexcontrollers';

import Dialog, { DialogFooter, SlideAnimation, DialogButton, DialogContent } from 'react-native-popup-dialog'
import { Message } from './styles'

// Redux
import { connect } from "react-redux";
import { SAGA_DELETE } from '../../redux/sagas/types';

import { Constants } from '../../constants';

interface Popuptype {
    visible: boolean
    user_name: string

    onCancel: any
    onOk: any
}
const Popup = (props: Popuptype) => {

    return (
        <Dialog
            visible={props.visible}
            onTouchOutside={props.onCancel}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            footer={
                <DialogFooter>
                    <DialogButton
                        text="CANCEL"
                        onPress={props.onCancel}
                    />
                    <DialogButton
                        text="OK"
                        onPress={props.onOk}
                    />
                </DialogFooter>
            }
        >
            <DialogContent>
                <Message>Deseja realmente excluir o usuário {props.user_name}?</Message>
            </DialogContent>
        </Dialog>
    )
}

export default Popup