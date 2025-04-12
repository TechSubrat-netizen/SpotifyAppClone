
import { StyleSheet, Text, TextInput, View } from "react-native"


function LoginWithPhoneNumber() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Enter Phone Number</Text>
        <View style={styles.box}>
               <TextInput style={styles.textInput}/>
        </View>
    </View>
   
  )
}
 const styles= StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"black"
    },
    text:{
        color:"white",
        fontSize:30
    },
    box:{
        height:100,
        width:300,
        margin:5,
        borderWidth:1,
        backgroundColor:'grey'
    },
    textInput:{
        width:"auto",

    }
     

 })
 

export default LoginWithPhoneNumber