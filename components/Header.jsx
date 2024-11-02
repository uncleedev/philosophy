import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { defaultStyles } from '../assets/styles/style'; // Adjust the import based on your structure
import { Colors } from '../constant/Color'; // Adjust the import based on your structure

const Header = ({ toggleModal, modalVisible, title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[defaultStyles.h2, { color: Colors.text[0] }]}>{title}</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Image 
          source={modalVisible ? require("../assets/icons/close.png") : require("../assets/icons/burger.png")} 
          style={styles.burgerIcon} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  burgerIcon: {
    height: 24,
    width: 24,
  },
});

export default Header;