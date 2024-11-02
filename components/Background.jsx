import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constant/Color'

export default function Background({children}) {
  return (
    <LinearGradient
        colors={[Colors.primary, Colors.accent]}
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24
        }}
    >
        {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({})