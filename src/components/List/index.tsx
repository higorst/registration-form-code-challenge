import React from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { Constants } from '../../constants';
import { Colors } from '../../styles/Colors';
import User from '../User';
import { ListContainer } from './styles'

interface PropsList {
    users: UserType[]

    isRefreshing: boolean
    onRefresh: any
}
interface UserType {
    name: string
    document: number
    type: string
}
const List = (props: PropsList) => {

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={props.isRefreshing}
                    onRefresh={props.onRefresh}
                    tintColor={Colors.individual}
                    colors={[Colors.individual]}
                />
            }
        >
            <ListContainer>
                {props.users.map((user, key) => {
                    return (
                        <User user={user} key={key} />
                    )
                })}
            </ListContainer>
        </ScrollView>
    )
}

export default List