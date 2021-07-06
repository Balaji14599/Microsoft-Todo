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

export default function Banner({setCount}){
    console.log(setCount);
    return(
        <View style={styles.container}>
         <View style={styles.banner}>
         {setCount < 10 ? <Text style={styles.text}>You Need More Focus on Your Goal!</Text> : setCount < 20 ? <Text style={styles.text}>Well Keep It Up...</Text>:setCount<30 ? <Text style={styles.text}>Doing Good Job Appreciate!!</Text>:setCount<40 ?<Text style={styles.text}>Almost Done</Text>:<Text style={styles.text}>Completed SucessFully!</Text>}
             <Text style={styles.text1}>{setCount}/40</Text>
           {setCount >30 ? <Text  style={styles.text2}>done!</Text>:<Text style={styles.text}></Text>}
         </View>
        </View>
    )
}

const styles=StyleSheet.create({
banner:{
    marginHorizontal:30,
    marginTop:20,
    height:150,
    borderWidth:1,
    borderRadius:25,
    backgroundColor:"#ffcccc",
    borderColor:"#ffcccc",
    padding:10
},
container:{
    backgroundColor:"white"
},
text:{
    fontSize:22,
    fontFamily: "JosefinSans-Regular",
    marginHorizontal:10,
    color:"black",
},
text1:{
    fontSize:25,
    fontFamily: "JosefinSans-Regular",
    marginHorizontal:20,
    color:"#70a1ff",
    marginTop:60,
    position:"absolute"
},
text2:{
    fontSize:25,
    fontFamily: "sans-serif",
    marginHorizontal:20,
    color:"#70a1ff",
    marginTop:100,
    position:"absolute"
    }
})