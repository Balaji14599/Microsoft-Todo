
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

export const Header = () =>
{
  return(
    <View style={styles.header}>
      <Text style={styles.text}>MY TODO</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  text:
  {
    textAlign:"center",
    fontWeight:"700",
    fontSize:14,
    padding:10,
    color:"white",
    marginTop:10
  },
  header:{
    height:50,
    backgroundColor:"#1289A7"
  }
})