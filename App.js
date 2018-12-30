import React from 'react';
import { StyleSheet, Text, View ,Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import SettingsScreen from './component/SettingsScreen';

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: '#17202a', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./Images/pes4.png')} style={styles.drawerImage}/>
      </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const MyApp = createDrawerNavigator(
  {
    Home:HomeScreen,
    Settings:SettingsScreen
  },{
    contentComponent: CustomDrawerComponent,
    contentOptions: {activeTintColor: 'orange' },
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    height:100,
    width: 100,
    borderRadius: 50,
  }
});
