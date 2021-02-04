import React, { useState, useEffect } from "react";
import { Switch } from "react-native";
import { Colors } from "../../styles/Colors";
import TouchableSendButton from "../TouchableSendButton";
import Input from "../Input";

import { TextError, TextInfo, Row } from './styles.info'
import { KeyboardAvoiding } from './styles'
import { Constants } from '../../constants';

import RegexControllers from "../../controllers/Regexcontrollers";
import ValidateFormControllers from "../../controllers/ValidateFormControllers";

interface UserType {
    name: string
    document: number
    type: string
}
interface PropsType {
    sending?: boolean
    send?: any
}

function Form(props: PropsType) {

    const [name, setName] = useState('')
    const [document, setDocument] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorDocument, setErrorDocument] = useState('')
    const [isSending, setSending] = useState(false)
    const [isIndividual, setIndividual] = useState(true)

    function handleRegex(value: string) {
        setDocument(RegexControllers.handleRegex(isIndividual, value))
    }

    function handleSend() {
        let result = ValidateFormControllers.handleValidate(isIndividual, name, document)
        setErrorName(result[1].toString())
        setErrorDocument(result[2].toString())
    }

    useEffect(() => {
        handleRegex(document)
    }, [isIndividual])

    return (
        <KeyboardAvoiding>
            <Row>
                <Switch
                    trackColor={{ false: Colors.switchFalse, true: Colors.switchTrue }}
                    thumbColor={isIndividual ? Colors.switchThumbTrue : Colors.switchThumbFalse}
                    ios_backgroundColor={Colors.switchBiOS}
                    onValueChange={(e) => setIndividual(!isIndividual)}
                    disabled={isSending}
                    value={isIndividual}
                />
                <TextInfo>{isIndividual ? Constants.typeUserShowFormIndividual : Constants.typeUserShowFormBusiness }</TextInfo>
            </Row>
            <Input
                value={name}
                placeholder={isIndividual ? Constants.placeholderFromIndividualName : Constants.placeholderFromIndividualDocument }
                onChangeText={(value: string) => setName(value)}
                sending={isSending}
            />
            {errorName.length > 0 && <TextError>{errorName}</TextError>}
            <Input
                value={document}
                placeholder={isIndividual ? Constants.placeholderFromBusinessName : Constants.placeholderFromBusinessDocument}
                onChangeText={(value: string) => handleRegex(value)}
                onlyNumber
                sending={isSending}
            />
            {errorDocument.length > 0 && <TextError>{errorDocument}</TextError>}
            <TouchableSendButton
                title={Constants.titleButtonSend}
                color={Colors.primary}
                onPress={handleSend}
                sending={isSending}
            />
        </KeyboardAvoiding>
    )
}

export default Form
