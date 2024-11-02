import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '../assets/styles/style'
import CustomButton from '../components/CustomButton'
import { Colors } from '../constant/Color'
import { router } from 'expo-router'

export default function index() {
  return (
  
    <ImageBackground
        source={require("../assets/images/background.png")}
        style={{
            height: "100%",
            width: "100%",
            padding: 24,
            justifyContent: "flex-end",
            gap: 26
        }}
    >

        <Text style={[defaultStyles.h1, {color: Colors.text[1]}]}>Welcome to Philosopy App</Text>
        <CustomButton 
            title={"Get  Started"}
            onPress={() => router.push("signin")}
        />
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
})