/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import LandingPage from "./Components/LandingPage";
import LoginScreen from "./Components/LoginScreen";
import Navigation from "./Components/Navigation";

function App() {
  
  return (
    <View style={{flex:1}}>
      {/* <HomeScreen/> */}
      {/* <LoginScreen/> */}
      {/* <LandingPage/> */}
      <Navigation/>
    </View>
  );
}


export default App;
