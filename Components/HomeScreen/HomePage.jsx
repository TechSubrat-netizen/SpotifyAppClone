import { View } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./Home"
import Search from "./Search"
import YourLibrary from "./YourLibrary"
import Premium from "./Premium"
 const Tab=createBottomTabNavigator()
function HomePage() {
  return (
   
        <Tab.Navigator initialRouteName="Home"   screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Search':
                iconName = focused ? 'search' : 'search-outline';
                break;
              case 'YourLibrary':
                iconName = focused ? 'library' : 'library-outline';
                break;
              case 'Premium':
                iconName = focused ? 'diamond' : 'diamond-outline';
                break;
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarPosition:"fix"
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="YourLibrary" component={YourLibrary} />
        <Tab.Screen name="Premium" component={Premium} />
        </Tab.Navigator>
   

  )
}

export default HomePage