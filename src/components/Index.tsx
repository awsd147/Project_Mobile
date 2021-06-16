import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './User/Homepage';

const AppNavigator = createStackNavigator();

export default function Index() {
    return (
        <NavigationContainer>
            <AppNavigator.Navigator>
                <AppNavigator.Screen
                    name="Home"
                    component={Homepage}
                    options={{ headerShown: false }}
                />
            </AppNavigator.Navigator>
        </NavigationContainer>
    )
}
