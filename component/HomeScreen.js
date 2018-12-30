import  React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Right } from 'native-base';

class HomeScreen extends Component { 
    static navigationOptions = {
        drawerIcon : ({tintColor}) => 
     < Icon name = 'home' style={{fontSize: 24, color: tintColor }}/>
    }

    render() {
        return(
            <Container>

                <Header style={{ height: 80,backgroundColor: '#1b2631'}}>
                    <Right>
                      <Icon name= "home" onPress={() =>
                    this.props.navigation.openDrawer()}/>  
                     </Right>               
                 </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <Text> Home Screen </Text>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;