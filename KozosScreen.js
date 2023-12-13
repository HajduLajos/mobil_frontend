import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from 'react-native';
import Ipcim from './Ipcim';
import { LinearGradient } from 'expo-linear-gradient';

const KozosScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch(`${Ipcim.Ipcim}EszkozokSeged`);
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
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Text>
                                    {item.eszkozok_id}, {item.eszkozok_nev}
                                </Text>
                                <TouchableOpacity style={{ textAlign: 'center', backgroundColor: "#06c995", width: 175, height: 45, padding: 8, marginLeft: 65 }} onPress={() => navigation.navigate('KozosUjlap', { atkuldes1: item.eszkozok_nev })}>
                                    <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Részletek</Text>
                                </TouchableOpacity>

                            </View>

                        )}
                    />
                )}

            </View>
        </LinearGradient>
    );
};

export default KozosScreen;