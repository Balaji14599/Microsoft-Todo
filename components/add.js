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
    Image,
    Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Add() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addIcon} onPress={() => navigation.navigate('Main')} >
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    addIcon: {
        backgroundColor: "#70a1ff",
        height: 75,
        width: 80,
        borderRadius: 100,
        fontSize: 100,
        marginHorizontal: 150,
        position:"absolute",
        bottom:0,
        marginTop:100,
        
        
        
    },
    addText: {
        fontSize: 50,
        textAlign: "center",
        color: "#f5f6fa",
    },
    container:
    {
        height:100
    }
})
