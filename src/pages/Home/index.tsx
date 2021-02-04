import React, { useState, useEffect } from 'react'

import { KeyboardAvoiding } from './styles'
import { Constants } from '../../constants';

// Redux
import { connect } from "react-redux";
// saga type
import { SAGA_LOAD } from '../../redux/sagas/types';

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
    const [isRefreshing, setRefreshing] = useState(false)

    function handleOnRefresh() {
        setRefreshing(true)
        props.load()
    }

    useEffect(() => {
        props.load()
    }, [])
    useEffect(() => {
        setUsers(props.users)
        setRefreshing(false)
    }, [props.users])

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

const mapStateToProps = (state: any) => ({
    users: state.register.users,
})
const mapDispatchToProps = (dispatch: any) => ({
    load: () => dispatch({ type: SAGA_LOAD }, dispatch),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)