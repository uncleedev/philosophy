import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { defaultStyles } from '../assets/styles/style';

export default function MenuModal({ modalVisible, toggleModal }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Image source={require("../assets/icons/close.png")} style={styles.icon} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => router.push("home")} style={styles.menuItem}>
            <Image source={require("../assets/icons/home.png")} style={styles.icon} />
            <Text style={defaultStyles.h3}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("about")} style={styles.menuItem}>
            <Image source={require("../assets/icons/about.png")} style={styles.icon} />
            <Text style={defaultStyles.h3}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("signin")} style={styles.menuItem}>
            <Image source={require("../assets/icons/logout.png")} style={styles.icon} />
            <Text style={defaultStyles.h3}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50, 
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1, 
  },
  menuItem: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row",
    gap: 8
  },
  icon: {
    height: 24,
    width: 24,
  }
});