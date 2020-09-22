import React, { Component } from 'react';  
import {StyleSheet, Text, View } from 'react-native';  
    import './global.js';
    
export default class save extends Component  {
  
    static navigationOptions = {title: 'Saved invoices',headerStyle: {
        backgroundColor: '#f4511e',
    },headerTintColor: '#fff',headerTitleStyle: 
    {fontWeight: 'bold',},
}    
    render() {  
        console.log (global.total)
        return (  
            <View style={styles.container}>  
                <Text>costumer email :{global.costumer.toString()}</Text>
                <Text>Total invoice =  ${global.total}</Text>
                
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
    
})  
