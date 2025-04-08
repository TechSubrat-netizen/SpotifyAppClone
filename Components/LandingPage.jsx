import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import spotifylogo from './Images/spotifylogo.jpg';
import { useNavigation } from "@react-navigation/native";

function LandingPage() {
   const navigation=useNavigation()
  return (
    <View style={styles.container}>
      
    
      <View style={styles.middleContent}>
        <Image source={spotifylogo} style={styles.logo} />
        <Text style={styles.title}>Turn Up The Volume</Text>
        <Text style={[styles.title, { textAlign: "center" }]}>Of Life.</Text>
      </View>

     
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={[styles.Btn,{backgroundColor:"green"}]}onPress={()=>navigation.navigate('Registration')}>
          <Text style={[styles.btnText,{color:"black"}]}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}onPress={()=>navigation.navigate("LoginScreen")}>
          <Text style={[styles.btnText,{backgroundColor:"transparent"}]} >Signin</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  middleContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  bottomButtons: {
    alignItems: "center",
    gap: 10,
  },
  Btn: {
    width: 270,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    padding: 8,
    alignItems: "center",
  },
  btnText: {
    fontSize: 15,
    color: "white",
  }
});

export default LandingPage;
