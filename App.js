import * as React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';


import Proba from './Proba';
import Proba2 from './Proba2';
import Proba3 from './Proba3';
import Kiirat from './Kiirat';
import Alkatreszek from './Retek';
import Mogyoro from './Mogyoro';
import Felvitel from './felvitel';


import NintendoTart from './NintendoTart';
import KiiratNintendo from './KiiratNintendo';
import PlaystationTart from './PlaystationTart';
import kiiratPlaystation from './kiiratPlaystation';
import XboxTart from './XboxTart';
import KiiratXbox from './KiiratXbox';
import Jatekok from './Jatekok';
import PcJatekok from './PcJatekok';
import KiiratPcJatekok from './KiiratPcJatekok';
import NintendoJatekok from './NintendoJatekok';
import KiiratNintendoJatekok from './KiiratNintendoJatekok';
import PlaystationJatekok from './PlaystationJatekok';
import KiiratPlaystationJatekok from './KiiratPlaystationJatekok';
import XboxJatekok from './XboxJatekok';
import KiiratXboxJatekok from './KiiratXboxJatekok';
import Komment from './Komment'
import Nevjegy from './Nevjegy';
import Hozzaszolas from './Hozzaszolas';



import KozosScreen from './KozosScreen';
import KozosUjlap from './KozosUjlap';

function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#AAD8E6', '#90EE90']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: "#06c995", width: 175, height: 45, padding: 8 }} onPress={() => navigation.navigate('Alkatreszek')}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Pc alkatrészek</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={{ backgroundColor: "#06c995", width: 200, height: 45, padding: 8 }} onPress={() => navigation.navigate('NintendoTart')}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Nintendo tartozékok</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={{ backgroundColor: "#06c995", width: 200, height: 45, padding: 8 }} onPress={() => navigation.navigate('PlaystationTart')}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Playstation tartozékok</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={{ backgroundColor: "#06c995", width: 200, height: 45, padding: 8 }} onPress={() => navigation.navigate('XboxTart')}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 18 }} >Xbox tartozékok</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}





function Root({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} ></Drawer.Screen>
      <Drawer.Screen name="Felvitel" component={Felvitel} ></Drawer.Screen>
      <Drawer.Screen name="Jatekok" component={Jatekok} ></Drawer.Screen>
      <Drawer.Screen name="Komment" component={Komment} ></Drawer.Screen>
      <Drawer.Screen name="Nevjegy" component={Nevjegy} ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
//<Drawer.Screen name="Notifications" component={NotificationsScreen} />
//<Drawer.Screen name="Próba" component={Proba_megjelenites} />
//<Drawer.Screen name="Próba3" component={Proba3_megjelenites} />
//<Drawer.Screen name="Pc alkatrészek" component={Proba2_megjelenites} ></Drawer.Screen>
//<Drawer.Screen name="Pc alkatrészek2" component={Retek_megjelenites} ></Drawer.Screen>
//<Drawer.Screen name="Mogyoró" component={Mogyoro} ></Drawer.Screen>



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    background: 'rgb(242, 242, 242)',
    primary: 'darkgreen',
    card: '#cacaca',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',

  },
};


export default function App() {
  return (

    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Kiirat" component={Kiirat} />
        <Stack.Screen name="Alkatreszek" component={Alkatreszek} />
        <Stack.Screen name="NintendoTart" component={NintendoTart} />
        <Stack.Screen name="KiiratNintendo" component={KiiratNintendo} />
        <Stack.Screen name="PlaystationTart" component={PlaystationTart} />
        <Stack.Screen name="KiiratPlaystation" component={kiiratPlaystation} />
        <Stack.Screen name="XboxTart" component={XboxTart} />
        <Stack.Screen name="KiiratXbox" component={KiiratXbox} />
        <Stack.Screen name="KozosUjlap" component={KozosUjlap} />
        <Stack.Screen name="PcJatekok" component={PcJatekok} />
        <Stack.Screen name="KiiratPcJatekok" component={KiiratPcJatekok} />
        <Stack.Screen name="NintendoJatekok" component={NintendoJatekok} />
        <Stack.Screen name="KiiratNintendoJatekok" component={KiiratNintendoJatekok} />
        <Stack.Screen name="PlaystationJatekok" component={PlaystationJatekok} />
        <Stack.Screen name="KiiratPlaystationJatekok" component={KiiratPlaystationJatekok} />
        <Stack.Screen name="XboxJatekok" component={XboxJatekok} />
        <Stack.Screen name="KiiratXboxJatekok" component={KiiratXboxJatekok} />
        <Stack.Screen name="Hozzaszolas" component={Hozzaszolas} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}