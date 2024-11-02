import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../constant/Color';
import { defaultStyles } from '../assets/styles/style';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, defaultStyles.shadow]}>
      <Text style={[defaultStyles.h3, { color: Colors.text[0], textAlign: 'center' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
  },
});