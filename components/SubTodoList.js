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
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';



export const SubTodoList = ({ item, Delete }) => {
    const [modalVisible, setModelVisible] = useState(false)
    const [isSelected, setSelection] = useState('');
    

    const toggleModal = () => {
        setModelVisible(!modalVisible);
    }
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f1f2f6", marginTop: 15, borderRadius: 10, marginHorizontal: 10 }}>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                {/* <Text style={styles.text}>{(item.text)}</Text> */}
                {isSelected ? <Text style={styles.text1}>{(item.text)}</Text> : <Text style={styles.text}>{(item.text)}</Text>}
            </View>
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.deleteIcon}>
                    <Image
                        source={require('../assets/delete.png')}
                        style={styles.delete}
                    />
                </View>
            </TouchableOpacity>
            <Modal isVisible={modalVisible}>
                <View style={styles.modal}>
                    <Text style={styles.cnfText}>Do You Want Delete This!</Text>
                    <View style={{flexDirection:"row",padding:20,marginHorizontal:50}}>
                        <View>
                            <Pressable onPress={()=>Delete(item.key)}>
                            <Text style={styles.yes}>YES</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable onPress={()=>toggleModal()}>
                            <Text style={styles.no}>NO</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
const styles = StyleSheet.create({
    text:
    {
        paddingTop: 30,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#f1f2f6",
        backgroundColor: "#f1f2f6",
        height: 90,
        textAlign: "center",
        fontFamily: "JosefinSans-Bold",
        fontSize: 18,
        marginHorizontal: 50
    },
    checkboxContainer:
    {
        flexDirection: "row",
        backgroundColor: "#f1f2f6",

    },
    checkbox: {
        marginTop: 37,
        alignItems: "center",
        justifyContent: "center",

    },
    text1: {
        textDecorationLine: "line-through",
        paddingTop: 30,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#f1f2f6",
        backgroundColor: "#f1f2f6",
        height: 90,
        textAlign: "center",
        fontFamily: "JosefinSans-Bold",
        fontSize: 18,
        marginHorizontal: 50


    },
    delete: {
        width: 50,
        height: 50,
        backgroundColor: "#f1f2f6",
    },
    deleteIcon: {
        flexDirection: "row",
        marginTop: 26
    },
    modal: {
        backgroundColor: "white",
        height: 100,
        borderRadius: 10
    },
    yes:
    {
        borderWidth: 1,
        borderColor: "#FF616D",
        backgroundColor: "#FF616D",
        textAlign: "center",
        width: 100,
        height: 30,
        borderRadius: 10,
        color: "white",
        fontSize: 20,
        fontFamily: "JosefinSans-SemiBold"
    },
    no: {
        borderWidth: 1,
        borderColor: "#FF616D",
        backgroundColor: "#FF616D",
        textAlign: "center",
        width: 100,
        height: 30,
        borderRadius: 10,
        color: "white",
        fontSize: 20,
        fontFamily: "JosefinSans-SemiBold",
        marginHorizontal:20
    },
    cnfText: {
        color: "black",
        fontSize: 20,
        fontFamily: "JosefinSans-Bold",
        padding:10
    }
})