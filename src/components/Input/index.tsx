import React from 'react'
import { Constants } from '../../constants';
import { Colors } from '../../styles/Colors';
import { InputText } from './styles'

interface PropsInput {
    placeholder: string

    value: string
    KeyboardType?: string
    onChangeText?: any
    sending?: boolean
    onlyNumber?: boolean
}
function Input(props: PropsInput) {

    return (
        <InputText 
            onChangeText={(string: string) => props.onChangeText(string)}
            placeholderTextColor={Colors.gray}
            placeholder={props.placeholder}
            value={props.value}
            editable={!props.sending}
            autoCapitalize="words"
            clearButtonMode="always"
            keyboardType={props.onlyNumber ? 'number-pad' : 'default'}
            autoFocus
        />
    )
}

export default Input