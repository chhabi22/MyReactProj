import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import BooksList from '../screens/BooksList'
import RecommendBooks from '../screens/RecommendBooks'
const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
         name='Home' 
         component={Home}
          options={{ title: 'Home Screen' }} 
          />
        <Stack.Screen
          name='BooksList'
          component={BooksList}
          options={{ title: 'BooksList' }}
        />
        <Stack.Screen
          name='RecommendBooks'
          component={RecommendBooks}
          options={{ title: 'RecommendBooks' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator