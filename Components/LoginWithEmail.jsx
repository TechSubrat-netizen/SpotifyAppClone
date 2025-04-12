
import { StyleSheet, TextInput,View,Text, TouchableOpacity } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


function LoginWithEmail() {
   let navigation=useNavigation()
  return (
   <View style={styles.main}>
    <View>
        <Text style={styles.text}>UserName or Email</Text>
        <TextInput style={styles.inputBox} />
    </View>
    <View>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.inputBox} secureTextEntry={true}/>
    </View>
     
     <View style={{alignItems:"center"}}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('HomePage')}>
            <Text style={{color:"white",textAlign:"center"}}>Login</Text>
        </TouchableOpacity>
     </View>
       
   </View>
  )
}
 const styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"black",
        gap:20
    },
    text:{
        fontSize:25,
        color:"white"

    }
    ,
    inputBox:{
        width:"95%",
         margin:"auto",
        borderRadius:10,
        backgroundColor:"grey"
    },
    btn:{
        width:100,
        backgroundColor:"blue",
        padding:8,
        borderRadius:10
    }

 })

export default LoginWithEmail