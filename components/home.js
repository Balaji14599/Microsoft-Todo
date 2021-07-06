import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { NextMain } from '../src/nextMain';
import { Main } from '../src/main';
import Add from './add';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Profile = () => {
    return (
        <View style={{ padding: 15 }}>
            <Image source={require('../assets/image.jpg')}
                style={{ width: 80, height: 80 }} />
        </View>
    )
}
export const Home = () => {
    
    const [currentDate, updateDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        updateDate(
            date + '-' + month + '-' + year
        )
        return () => {

        }
    }, [])
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.home}>
                <View>
                    <Text style={styles.text}>Hi Balaji,</Text>
                    <Text style={styles.date}>{currentDate}</Text>
                </View>
                <Profile />
            </View>
            <NextMain />
            <Add />
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    home: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text:
    {
        fontFamily: "JosefinSans-Medium",
        fontSize: 30,
        color: "#1e272e",
        padding: 10,
        marginHorizontal: 30
    },
    date:
    {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
        color: "#dfe4ea",
        marginHorizontal: 40
    },
   
})