import { StyleSheet, Text, View, Alert, TextInput } from 'react-native'
import React, {useState} from 'react'
import Background from '../../components/Background'
import { defaultStyles } from '../../assets/styles/style'
import { Colors } from '../../constant/Color'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signInWithEmailAndPassword } from '@react-native-firebase/auth'
import { auth } from "../../configs/firebaseConfig"

export default function signin() {

  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", `Successfully logged in as: ${userCredential.user.email}`);
      router.push("home")
      console.log("Successfully logged in: ", userCredential.user);
    } catch (error) {
      let errorMessage;
  
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        default:
          errorMessage = 'An error occurred. Please try again.';
      }
  
      Alert.alert("Error", errorMessage);
      console.error("Login error: ", error);
    }
  }

  return (
    <Background>
      <Text style={[defaultStyles.h1, {color: Colors.text[0]}]}>PHILOSOPHY</Text>

      <View style={[defaultStyles.form, defaultStyles.shadow]}>
        <Text style={[defaultStyles.h2, {opacity: 0.7}]}>Login Now</Text>
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
              title={"Login"}
              onPress={() => router.push("home")}
            />
          </View>
          <Text style={[defaultStyles.h3, {opacity: 0.6}]}>Don't have an Account?<Link href={"signup"} style={{color: Colors.accent}}>Sign Up.</Link></Text>
        </View>

        
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  
})