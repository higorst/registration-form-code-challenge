import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

// REDUX
import { Provider } from 'react-redux';
import store from './redux'

// PAGES
import Home from './pages/Home/index'

import { Constants } from './constants'
import { Colors } from './styles/Colors'

function Routes() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar
                    backgroundColor={Colors.headerColor}
                    barStyle='light-content'
                />
                <Navigator screenOptions={{
                    headerShown: false,
                }} >
                    <Screen
                        name={Constants.pageHome}
                        component={Home}
                    />
                </Navigator>
            </NavigationContainer>
        </Provider >
    )
}

export default Routes