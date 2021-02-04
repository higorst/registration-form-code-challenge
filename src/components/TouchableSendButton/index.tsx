import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Constants } from '../../constants';
import { Colors } from '../../styles/Colors';
import { Touchable, TitleButton } from './styles'

interface PropsButton {
    color: string
    title: string

    // flags
    sending?: boolean
    onPress?: any
}
function TouchableSendButton(props: PropsButton) {

    return (
        <Touchable
            color={props.color}
            sending={props.sending}
            onPress={props.onPress}
        >
            <TitleButton
                fontSize={Constants.fontSizeTitleTouchable}
            >{props.sending ? Constants.titleButtonSending : props.title}</TitleButton>
            {props.sending && <ActivityIndicator size="small" color={Colors.white} />}

        </Touchable>
    )
}

export default TouchableSendButton