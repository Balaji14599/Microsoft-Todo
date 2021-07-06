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
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';

export default function Category()
{
    return (
        <View>
            <Text style={styles.text}>Categories</Text>
        <View style={styles.container}>
            <Pressable>
            <View style={styles.innerCategory}>
            <Image 
            source={require('../assets/sports1.jpg')}
            style={{width:70,height:70,marginHorizontal:20,marginTop:10,
            borderRadius:120}}/>
            <Text style={styles.text1}>Sports</Text>
            <Text  style={styles.text2}>2 Tasks</Text>
            </View>
            </Pressable>
            <View style={styles.innerCategory}>
            <Image 
            source={require('../assets/book.jpg')}
            style={{width:70,height:70,marginHorizontal:20,marginTop:10,
            borderRadius:120}}/>
            <Text style={styles.text1}>Books</Text>
            <Text  style={styles.text2}>4 Tasks</Text>
            </View>
            <View style={styles.innerCategory}>
            <Image 
            source={require('../assets/movie.png')}
            style={{width:70,height:70,marginHorizontal:20,marginTop:10,
            borderRadius:120}}/>
            <Text style={styles.text1}>Movies</Text>
            <Text  style={styles.text2}>2 Tasks</Text>
            </View>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
  text:{
        padding:10,
        marginHorizontal:30,
        marginTop:20,
        fontFamily: "JosefinSans-Bold",
        fontSize: 20,
        color: "#1e272e",
  },
  container:{
    backgroundColor:"white",
    flexDirection:"row"
},
innerCategory:{
    borderWidth:1,
    borderRadius:10,
    height:90,
    width:250,
    marginHorizontal:30,
    borderColor:"#dfe4ea",
    backgroundColor:"#dfe4ea",
    flexDirection:"row",
},
text1:{
    textAlign:"center",
    fontSize:20,
    fontFamily:"JosefinSans-Bold",
    marginTop:20,
    color:"#5352ed"
},
text2:{
    fontSize:20,
    fontFamily:"JosefinSans-SemiBold",
    marginTop:50,
    color:"grey",
    marginLeft:-60
   
    
}
})