import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LandingPage from "./LandingPage"
import LoginScreen from "./LoginScreen"
import Registration from "./Registration"
 const Stack=createNativeStackNavigator()
function Navigation() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  
  )
}

export default Navigation