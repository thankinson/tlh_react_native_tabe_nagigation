import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'


const BottomTab = createBottomTabNavigator()

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
         screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b'
        }}
      >
        <BottomTab.Screen name='Welcome' component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
          }}
        />
        <BottomTab.Screen name='User'component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

