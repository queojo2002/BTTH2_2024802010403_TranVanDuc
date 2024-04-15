import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './screens/Contacts';
import ContactThumbnail from './components/ContactThumbnail';
import DetailListItem from './components/DetailListItem';


export default function App() {
  return (
    <View style={styles.container}>
      <ContactThumbnail />
      <DetailListItem icon="email" title="Email" subtitle="ducln339@gmail.com"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
