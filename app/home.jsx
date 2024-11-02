import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Background from '../components/Background';
import { philosophersData } from '../lib/PhilosophersData';
import MenuModal from '../components/MenuModal';
import Header from '../components/Header';
import CardPhilo from '../components/CardPhilo';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };

  return (
    <Background>
      <Header toggleModal={toggleModal} modalVisible={modalVisible} title={"PHILOSPHERS"} />

      <ScrollView style={{ width: "100%" }}>
        <View style={{ gap: 16, width: "100%" }}>
          {philosophersData.map((philosopher) => (
            <CardPhilo key={philosopher.id} name={philosopher.name} image={philosopher.image} details={philosopher.description} />
          ))}
        </View>
      </ScrollView>
      
      {/* Pass modalVisible and toggleModal as props */}
      <MenuModal modalVisible={modalVisible} toggleModal={toggleModal} />
    </Background>
  );
}

const styles = StyleSheet.create({
  
});