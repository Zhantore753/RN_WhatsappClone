import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, Image, Text,
  TouchableWithoutFeedback,
  TouchableHighlight 
} from 'react-native';
import { 
  Octicons, 
  MaterialCommunityIcons, 
  MaterialIcons, 
  FontAwesome5 } from '@expo/vector-icons'; 

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import {useNavigation} from '@react-navigation/native';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: '600'
      }
    }}>
      <Stack.Screen 
      name="Root" 
      component={MainTabNavigator} 
      options={{
        title:'WhatsApp',
        headerRight:()=>(
          <View style={{
            flexDirection: 'row', 
            width: 60, 
            justifyContent: 'space-between', 
            marginRight: 10
            }}>
            <Octicons name="search" size={22} color={'white'}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
          </View>
        )
          
      }}
      />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({route}) => {
        const backClick = route.params.backBut;
        return({
         title: ()=>(<Text>route.params.name</Text>),
         headerLeft: () => (
            <View
            style={{
              flexDirection: 'row',
              width: 'auto', 
              justifyContent: 'space-between'
              }}>
              <TouchableHighlight
              style={{marginLeft:4 ,paddingLeft:8, paddingRight:8, borderRadius: 60}}
              underlayColor={'#10897B'} onPress={backClick}>
                <View style={{
                  alignItems: 'center',
                  paddingTop: 7,
                }}>
                  <MaterialCommunityIcons name="arrow-left"size={24} color="white"/>
                </View>
              </TouchableHighlight>
              <View style={{
                paddingLeft: 5
              }}>
              <Image source={{ uri: route.params.uri}} style={{
                width: 40,
                height: 40,
                marginRight: 15,
                borderRadius: 50,
                }} 
              />
              </View>
              <View><Text style={{
                textAlignVertical: 'center',
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 5
              }}>{route.params.name}</Text></View>
              
            </View>
          ),
         headerRight: () => (
           <View 
           style={{
            flexDirection: 'row', 
            width: 110, 
            justifyContent: 'space-between', 
            marginRight: 10
            }}>
              <FontAwesome5 name="video" size={22} color="white"/>
              <MaterialIcons name="call" size={22} color="white"/>
              <MaterialCommunityIcons name="dots-vertical" size={22} color="white"/>
           </View>
         ),
        })}}
      />
      <Stack.Screen name="Contacts" component={ContactsScreen}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
