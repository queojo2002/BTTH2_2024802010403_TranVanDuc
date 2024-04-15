import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import MyStack from './navigation/stack_navigation';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './screens/Favorites';
import MyTabs from './navigation/bottom_navigation';
import TabNavigator from './navigation/stack_navigation';


export default function App() {
  return (
  
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
