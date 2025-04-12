import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./LandingPage";
import LoginScreen from "./LoginScreen";
import Registration from "./Registration";
import LoginWithEmail from "./LoginWithEmail";
import HomePage from "./HomeScreen/HomePage";
import DrawyerNavigation from "./HomeScreen/DrawyerNavigation";


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: "", 
            headerStyle:{
              backgroundColor:"black"
            },
            headerTintColor:"white"
           
           
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: "",
            headerBackTitleVisible: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} options={{
          headerTitle:"",
          headerStyle:{
           backgroundColor:"black",
          
          },
          headerTintColor:"white"
         
        }}/>
        <Stack.Screen  name="HomePage" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="DrawyerNavigation" component={DrawyerNavigation}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Navigation;
