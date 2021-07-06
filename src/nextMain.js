
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList, Alert,
} from 'react-native';
import { Header } from '../components/header'
import { AddTodo } from '../components/addTodo';
import { SubTodoList } from '../components/SubTodoList';
import Banner from '../components/banner';
import Category from '../components/category';


export const NextMain = () => {
    const [count, updateCount] = useState(0);
    const [setCount, updateSetCount] = useState(0);
    const [todo, setTodo] = useState([
        { text: 'Wake Up', key: '1' },
        { text: 'Fresh Up', key: '2' },
        { text: 'Warm Up', key: '3' },
        { text: 'Finish', key: '4' },
    ]);
 
    const Delete = (key) => {
        setTodo((prevTodo) => {
            return prevTodo.filter(todo => todo.key != key);
        })
        updateCount(count + 1);
        updateSetCount(setCount+10);
        
    }
    return (
        <View>
            <Banner setCount={setCount}/>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Category />
                </ScrollView>
            </View>
            <View style={styles.today}>
                <Text style={styles.todayText}>Today</Text>
                <Text style={styles.todayText1}>{count}/4</Text>
            </View>
            <View style={{ marginHorizontal: 25, backgroundColor: "#dfe4ea", borderRadius: 10, borderWidth: 1, borderColor: "#f1f2f6" }}>
                {count < 1 ? <View style={styles.roundBar} /> : count < 2 ? <View style={styles.roundBar1} />:count<3 ? <View style={styles.roundBar2} />:count<4 ?<View style={styles.roundBar3} />:<View style={styles.roundBar4} ><Text style={styles.conText}>Do you want More click Down!</Text></View>}
            </View>
            <View style={styles.content}>
                <View style={styles.List}>
                    <FlatList
                        data={todo}
                        renderItem={({ item }) => (
                            <SubTodoList item={item} Delete={Delete} />
                        )} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 10,
        marginTop: 20
    },
    List: {
        padding: 10,

    },
    today:
    {
        padding: 10,
        marginHorizontal: 30,
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    todayText: {
        fontSize: 20,
        fontFamily: "JosefinSans-Bold"
    },
    todayText1: {
        fontSize: 20,
        fontFamily: "JosefinSans-Bold",
        color: "#70a1ff"
    },
    roundBar: {
        height: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#dfe4ea",
        backgroundColor: "#70a1ff",
        width:0
    },
    roundBar1: {
        height: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#dfe4ea",
        backgroundColor: "#70a1ff",
        width: 100
    },
    roundBar2: {
        height: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#dfe4ea",
        backgroundColor: "#70a1ff",
        width: 200
    },
    roundBar3: {
        height: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#dfe4ea",
        backgroundColor: "#70a1ff",
        width: 300
    },
    roundBar4: {
        height: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#dfe4ea",
        backgroundColor: "#70a1ff",
        width: 340
    },
    conText:{
        fontSize:20,
        fontFamily:"JosefinSans-Bold",
        height:100,
        marginTop:40,
        marginHorizontal:30,
        color:"#4C4C6D",
        width:300
    }
})