import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';


export const TodoList = ({item,PressHandler}) =>
{
    return(
        
            <TouchableOpacity onPress={()=>PressHandler(item.key)}>
                <Text style={styles.text}>{(item.text)}</Text>
            </TouchableOpacity>
 
    )
}
const styles=StyleSheet.create({
    text:
    {
        paddingTop:30,
        marginTop:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#f1f2f6",
        backgroundColor:"#f1f2f6",
        height:90,
        textAlign:"center",
        fontFamily:"JosefinSans-Bold",
        fontSize:18

    }
})