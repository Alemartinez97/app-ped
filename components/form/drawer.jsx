import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from "react-native-paper";
import Schedule from "./schedule";
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    margin: 10
  },
  text: {
    margin: 5,
    color:'white'
  },
  buttom: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#efb810',
    margin: 10
  }
});
const Drawer = ({ navigation }) => {
  const [data, setData] = useState();
  return (
    <View >
      <Appbar.Header style={styles.header}>
        <Appbar.Action color='white' icon="information" />
      </Appbar.Header>
      <View style={{ backgroundColor: 'blue', alignItems: 'center', display: 'flex' }}>
        <Text style={styles.title} ><Text >LOGO</Text></Text>
        <MaterialCommunityIcons name="calendar-month" color={'#efb810'} size={36} />
        <Text style={styles.text} >Benvenuto in GIF</Text>
        <Text style={styles.text} >Con quest'App prenotare le tue attivita{"\n"} preferite e tanto altro ancora</Text>
        {/* <Schedule/> */}
        <Pressable
          style={styles.buttom}
          // onPress={onPressLearnMore}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text>ENTRA IN GETFIT</Text>
        </Pressable>
      </View>

    </View>
  );
};
export default Drawer;
