import React, { useState, useEffect } from 'react'
import {
    Text
} from 'react-native'

import { KeyboardAvoiding } from './styles'
import { Constants } from '../../constants';

// components
import Header from '../../components/Header';
import Form from '../../components/Form';

function Home(props: any) {

    return (
        <KeyboardAvoiding>
            <Header title={Constants.titleHeaderForm} />
            <Form />
            <Header title={Constants.titleHeaderUsers} />
        </KeyboardAvoiding>
    )

}

export default Home