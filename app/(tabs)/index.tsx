import { ScrollViewComponent, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <ScrollView>
        <Text>Top!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Let's make this thing scroll!</Text>
        <Text>Bottom!</Text>
      </ScrollView>
        
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
