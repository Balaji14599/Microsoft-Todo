

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
import { Main } from './src/main';
import { Home } from './components/home';
import Add from './components/add';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  console.log(JSON.stringify(navigation));
  return (
    <View style={styles.home} >
      <TouchableOpacity onPress={() => navigation.navigate('TODO')}>
        <Text style={styles.hometext}>ENTER</Text>
      </TouchableOpacity>
    </View>
  )
}
const App = () => {
  const stack = createStackNavigator();
  const ScreenHead = 
  {
    headerShown:false
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator screenOptions={ScreenHead}>
          <stack.Screen name="Home" component={HomeScreen} />
          <stack.Screen name="TODO" component={Home} />
          <stack.Screen name="Main" component={Main} />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:"#9980FA",
  },
  home:
  {
    marginTop: 200,
    backgroundColor: "#1289A7",
    height: 50,
    width: 150,
    marginLeft: 120,
    borderRadius: 7
  },
  hometext: {
    textAlign: "center",
    marginTop: 15,
    color: "white",
    fontSize: 14,
    fontWeight: "600"
  }
});

export default App;
