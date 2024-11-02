import { StyleSheet, Text, View, Alert, TextInput } from 'react-native'
import React, {useState} from 'react'
import Background from '../../components/Background'
import { defaultStyles } from '../../assets/styles/style'
import { Colors } from '../../constant/Color'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth'
import { auth } from "../../configs/firebaseConfig"

export default function signup() {

  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Successfully created an account");
      setEmail("")
      setPassword("")
    } catch (error) {
      let errorMessage;
    
      switch (error.code) {
          case 'auth/invalid-email':
              errorMessage = "The email address is not valid.";
              break;
          case 'auth/email-already-in-use':
              errorMessage = "The email address is already in use.";
              break;
          case 'auth/weak-password':
              errorMessage = "The password is too weak. It should be at least 6 characters.";
              break;
          case 'auth/operation-not-allowed':
              errorMessage = "Email/password accounts are not enabled.";
              break;
          default:
              errorMessage = "An unknown error occurred.";
              break;
      }

      Alert.alert("Error", errorMessage);
      console.log("Error: ", error);
    }
  }

  return (
    <Background>
      <Text style={[defaultStyles.h1, {color: Colors.text[0]}]}>PHILOSOPHY</Text>

      <View style={[defaultStyles.form, defaultStyles.shadow]}>
        <Text style={[defaultStyles.h2, {opacity: 0.7}]}>Register Now</Text>
        <View style={{width: "100%", gap: 12, alignItems: 'center'}}>
          <View style={{width: "100%", gap: 20}}>
            <View style={{gap: 16}}>
              <View style={[defaultStyles.shadow, { borderRadius: 10, backgroundColor: '#fff' }]}>
                <TextInput 
                  placeholder='Email'
                  placeholderTextColor={"#666666"}
                  style={[defaultStyles.h3, defaultStyles.input]}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={[defaultStyles.shadow, { borderRadius: 10, backgroundColor: '#fff' }]}>
                <TextInput 
                  placeholder='Password'
                  secureTextEntry
                  placeholderTextColor={"#666666"}
                  style={[defaultStyles.h3, defaultStyles.input]}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>

            <CustomButton 
              title={"Register"}
            />
          </View>
          <Text style={[defaultStyles.h3, {opacity: 0.6}]}>Already have an Account?<Link href={"signin"} style={{color: Colors.accent}}>Sign In.</Link></Text>
        </View>

        
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  
})