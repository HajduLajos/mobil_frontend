import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const Jatekok = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#AAD8E6', '#90EE90']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
    <View style={{flex: 1, padding: 24}}>
     
    <TouchableOpacity style={{ textAlign:'center', backgroundColor: "#06c995", width: 175, height: 45, padding: 8,  }} onPress={() => navigation.navigate('PcJatekok')}>
        <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Pc játékok</Text>
    </TouchableOpacity>

     
    </View>
    </LinearGradient>
  );
};





export default Jatekok;