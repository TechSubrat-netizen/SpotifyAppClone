import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; // Facebook
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Phone
import AntDesign from 'react-native-vector-icons/AntDesign'; // Google
import Entypo from 'react-native-vector-icons/Entypo'; // Email
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
   let navigation=useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo and Heading */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.heading}>Log in to Spotify</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('LoginWithEmail')}>
          <Entypo name="email" size={24} color="#0F9D58" />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcon name="phone" size={24} color="#34A853" />
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="google" size={24} color="#DB4437" />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="facebook" size={20} color="#3b5998" />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Text style={[styles.footerText, { fontWeight: 'bold' }]}>Sign up</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonGroup: {
    gap: 15,
    alignItems: 'center',
  },
  button: {
    width: 270,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginScreen;
