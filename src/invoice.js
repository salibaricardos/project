import React, { Component} from 'react';
import { StyleSheet, View, Button,FlatList,Text, Alert,SafeAreaView} from 'react-native';
import { sendEmail } from './email';
import './global.js';

 

const products = [
  { _id: 1, name: 'black label', price: 50, quantity: 0 },
  { _id: 2, name: 'red label', price: 29, quantity: 0 },
  { _id: 3, name: 'blue label', price: 200, quantity: 0 },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Text>{item.name} - </Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Button title="Subtract" onPress={this.props.onSubtract} />
          <Text>{item.quantity}</Text>
          <Button title="Add" onPress={this.props.onAdd} />
        </View>
      </View>

    )
  }
}

class invoice  extends React.Component {
  static navigationOptions = {title: 'Invoice',headerStyle: {
    backgroundColor: '#f4511e',
},headerTintColor: '#fff',headerTitleStyle: 
{fontWeight: 'bold',},};

  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { navigate } = this.props.navigation;
    global.total=[totalPrice]
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <Button  
        title='Save' onPress={() =>navigate('save')}/>
        <Button 
        title='Submit'
        onPress={() => sendEmail(
        ''+(global.costumer.toString()),
        'your total is:  $'+(totalPrice.toString()),
        'please pay the amount in link www.payment.com ',
         ).then(() => {
        console.log('Our email successful pr1ovided to device mail ');

    }) } />  
        
        <Text>{global.costumer.toString()}</Text>
        <Text>Total Quantity: {totalQuantity}</Text>
        <Text>Total Price: {totalPrice}</Text>
      </SafeAreaView>
     
    );
     
  }
}

export default invoice;