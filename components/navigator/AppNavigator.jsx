import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../home/home';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} name="Home" component={Home} />
      <Tab.Screen options={{
        tabBarLabel: 'Notifiche',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }} name="Notifiche" component={SettingsScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Attivita',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={26} />
        ),
      }} name="Attivita" component={HomeScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Club',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="google-maps" color={color} size={26} />
        ),
      }} name="Club" component={SettingsScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Profilo',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} name="Profilo" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}