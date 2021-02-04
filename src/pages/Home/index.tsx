import React, { useState, useEffect } from 'react'
import {
    Text
} from 'react-native'
import { KeyboardAvoiding } from './styles'

function Home(props: any) {

    return (
        <KeyboardAvoiding>
            <Text>Home</Text>
        </KeyboardAvoiding>
    )

}

export default Home