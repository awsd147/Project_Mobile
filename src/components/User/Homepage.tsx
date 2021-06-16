import React, { useState } from 'react'
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { Header } from 'react-native-elements';
const styles = StyleSheet.create({
    container: {
        opacity: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 50
    },
    text: {
        justifyContent: 'center',
        fontSize: 30,
        fontFamily: "Cochin",
        fontWeight: "bold",
        textAlign: 'center'
    }
})
export default function Homepage() {
    return (
        <View>
            <ScrollView>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: "Home", style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Text onPress={() => ()}></Text>
            </ScrollView>
        </View>
    )
}

