import React, { useState, useEffect } from 'react'
import {
    Text
} from 'react-native'

import { KeyboardAvoiding } from './styles'

// components
import Header from '../../components/Header';
import { Constants } from '../../constants';

function Home(props: any) {

    return (
        <KeyboardAvoiding>
            <Header title={Constants.titleHeaderForm} />
            <Header title={Constants.titleHeaderUsers} />
        </KeyboardAvoiding>
    )

}

export default Home