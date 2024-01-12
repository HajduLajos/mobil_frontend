import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ipcim from './Ipcim';

const Hozzaszolas = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [text1, text2, onChangeText1, onChangeText2] = React.useState('');

    const date = Date();

    const getMovies = async () => {
        try {
            const response = await fetch(`${Ipcim.Ipcim}PcJatekok`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);



    return (

        <LinearGradient
            colors={['#AAD8E6', '#90EE90']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{ flex: 1, padding: 24 }}>

                <Text>{date}</Text>

                <View>
                    <TextInput
                        style={styles.input1}
                        onChangeText={onChangeText1}
                        value={text1}
                        placeholder="Név:"
                        maxLength={35}
                    />
                    <TextInput
                        style={styles.input2}
                        onChangeText={onChangeText2}
                        value={text2}
                        multiline={true}
                        numberOfLines={13}
                        placeholder="Hozzászólás szövege:"

                    />
                </View>

                <TouchableOpacity style={{ textAlign: 'center', backgroundColor: "#06c995", width: 175, height: 45, padding: 8, marginLeft: 93 }} onPress={() => navigation.goBack()}>
                    <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Hozzászólás</Text>
                </TouchableOpacity>

            </View>
        </LinearGradient>


    );
};
const styles = StyleSheet.create({
    input1: {
        height: 40,
        width: 340,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input2: {
        height: 40,
        width: 340,
        height: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top'
    },
});




export default Hozzaszolas;