import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Nevjegy = () => {
  




  

const kattintas = () =>{
    alert(valasztott)
}

  return (
    <LinearGradient
      colors={['#AAD8E6', '#90EE90']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
    <View style={{flex: 1, padding: 24}}>
        
    <Text style={{textAlign:'center', fontSize: 60,}}>Készítette:</Text>
    <Text style={{textAlign:'center', fontSize: 40,}}>Faur Zsombor</Text>
    <Text style={{textAlign:'center', fontSize: 40,}}>és</Text>
    <Text style={{textAlign:'center', fontSize: 40,}}>Hajdu Lajos</Text>

    </View>
    </LinearGradient>

    
  );
};

export default Nevjegy;