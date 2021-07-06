
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';


export const AddTodo = ({ SubmitHandler }) => {
    const [text, setText] = useState();
    const ChangeHandler = (val) => {
        
        setText(val);
    }
    return (
        <View>
            <TextInput
                style={styles.textinput}
                placeholder="New Todo"
                onChangeText={(val) => ChangeHandler(val)} />
            <TouchableOpacity
                onPress={() => SubmitHandler(text)}><Text style={styles.touch} >ADD TODO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    touch:
    {
        marginTop:10,
        borderRadius: 4,
        backgroundColor: "#1289A7",
        height: 40,
        textAlign: "center",
        padding: 10,
        color: "white"
    }
})

