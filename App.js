import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from "./components/navigator/AppNavigator";

export default function App() {
  return <AppNavigator theme="light" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
