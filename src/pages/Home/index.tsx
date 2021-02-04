import React, { useState, useEffect } from 'react'
import {
    Text
} from 'react-native'

import { KeyboardAvoiding } from './styles'
import { Constants } from '../../constants';

// components
import Header from '../../components/Header';
import List from '../../components/List';
import Form from '../../components/Form';

interface UserType {
    name: string
    document: number
    type: string

    load: any
}
function Home(props: any) {
    
    const [users, setUsers] = useState<UserType[]>([])
    const [isRefreshing, setRefreshing] = useState(false);
    
    function handleOnRefresh() {
        setRefreshing(true)
    }

    return (
        <KeyboardAvoiding>
            <Header title={Constants.titleHeaderForm} />
            <Form />
            <Header title={Constants.titleHeaderUsers} />
            <List 
                users={users} 
                isRefreshing={isRefreshing}
                onRefresh={handleOnRefresh}
            />
        </KeyboardAvoiding>
    )

}

export default Home