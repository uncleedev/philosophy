import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '../assets/styles/style'
import { Colors } from '../constant/Color'

export default function CardPhilo({name, image, details}) {
  return (
    <View style={[styles.card, defaultStyles.shadow]}>
      <Image 
        source={ image ? image : require("../assets/images/icon.png")}
        style={{
            height: "100%",
            width: "40%",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            objectFit: 'cover'
        }}
      />

      <View style={{gap: 12, padding: 8, flexShrink: 1}}>
        <Text style={[defaultStyles.h4, {color: Colors.accent}]}>{name}</Text>
        <Text style={[defaultStyles.p, {textAlign: "justify"}]}>{details}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        minHeight: 150
    }
})