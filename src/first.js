//This is an example code for Navigator// 
import React, {Component,useState } from 'react';
//import react in our code. 
import { StyleSheet, View,Text, Button} from 'react-native';
//import all the components we are going to use.
import {Picker} from '@react-native-community/picker';


 class FirstPage extends React.Component {
  costumer=[{name:'ricky' ,email:'examplericky@gmail.com'},{name:'mike' ,email:'examplemike@gmail.com'},{name:'boudi', email:'exampleboudi@gmail.com'}]
  static navigationOptions = {
    title: 'Home',
    headerStyle: {backgroundColor: '#f4511e',},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold',},   };
r
 state = {costumer: ''};
  render() {
    global.costumer=this.state.costumer
    const { navigate } = this.props.navigation;  
    return (
      <View style={styles.container}>
        <Button 
        title='Invoice'
        onPress={() =>navigate('invo')}/>
        <Text style={{margin:20}}>Select Costumer</Text>
  <Picker
  selectedValue={this.state.costumer}
  style={{height: 50, width: 200,borderRadius: 14,  backgroundColor: '#42A5F5',color: 'white',}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({costumer: itemValue})
  }>
   <Picker.Item label="Ricky" value="rrricky12@gmail.com" />
    <Picker.Item label="Mike" value="mikeee879@gmail.com" />
    <Picker.Item label="Boudi" value="bboudi663@gmail.com" />
   </Picker>
   <Text>costumer email :{this.state.costumer}</Text>
     </View> 
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default FirstPage