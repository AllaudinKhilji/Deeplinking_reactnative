import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function ArticleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen
          name="Feed"
          component={FeedScreen}
          options={{ drawerLabel: 'Feed' }}
        />
        <Drawer.Screen
          name="Article"
          component={ArticleScreen}
          options={{ drawerLabel: 'Article' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
