
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList, Alert
} from 'react-native';
import { AddTodo } from '../components/addTodo';
import { TodoList } from '../components/todoList';

export const Main = () => {
    const [todo, setTodo] = useState([
        { text: 'Wake Up', key: '1' },
        { text: 'Fresh Up', key: '2' },
        { text: 'Warm Up', key: '3' },
    ]);
    const SubmitHandler = (text) => {
        if (text != '') {
            setTodo((prevTodo) => {
                return [
                    { text: text, key: Math.random().toString()},
                    ...prevTodo
                ]
            });
        }
        else {
            Alert.alert(
                "Enter the TODO",
                "Type the text"
            )
        }
    };
    const PressHandler = (key) => {
        setTodo((prevTodo) => {
            return prevTodo.filter(todo => todo.key != key);
        })
    }
    return (
        <View>
            
            <View style={styles.content}>
                <AddTodo SubmitHandler={SubmitHandler} />
                <View style={styles.List}>
                    <FlatList
                        data={todo}
                        renderItem={({ item }) => (
                            <TodoList item={item} PressHandler={PressHandler} />
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
        padding: 10
    }
})