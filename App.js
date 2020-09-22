
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './android/app/src/first';
import invoice from './android/app/src/invoice';
import save from './android/app/src/save';

data=[{key:'twix',price:1},{key:'mars',price:3},{key:'snickers',price:4},{key:'unica',price:1}];


const App = createStackNavigator({
 
    First: { screen: FirstPage }, 
    invo:  {screen: invoice},
    save: {screen:save}
  },
  {
    initialRouteName: 'First',
  }
);
export default createAppContainer(App);
