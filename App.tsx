// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import Home from './Home';
// import Share from './Components/Share';
// const App=()=>{
//   return(
//     <Home/>
//     <Share/>
//   )
// }







// // export default App;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Otp from './Otp';
import Login from './Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();


const App = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>

    </NavigationContainer>
    </GestureHandlerRootView>
  );
}



export default App;
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import HomeScreen from './Home';


// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <HomeScreen/>
//     // <GestureHandlerRootView>
//     //   <NavigationContainer>
//     //     <Drawer.Navigator initialRouteName="Home">
//     //       <Drawer.Screen name="Home" component={HomeScreen} />
          
//     //     </Drawer.Navigator>
//     //   </NavigationContainer>
//     // </GestureHandlerRootView>
//   );
// }

// export default App;
