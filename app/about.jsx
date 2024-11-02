import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Background from '../components/Background'
import { defaultStyles } from '../assets/styles/style'
import { Colors } from '../constant/Color'
import MenuModal from '../components/MenuModal'
import Header from '../components/Header'

export default function about() {

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };
  return (
    <Background>
      <Header toggleModal={toggleModal} modalVisible={modalVisible} title={"About Us"} />


      <ScrollView>
        <View style={{gap: 16}}>
          <View style={{backgroundColor: "#fff", padding: 16, borderRadius: 20, gap: 16}}>
            <Text style={defaultStyles.h2}>Philosopy</Text>
            <Text style={[defaultStyles.p, {textAlign: "justify"}]}>Historically, many of the individual sciences, such as physics and psychology, formed part of philosophy. However, they are considered separate academic disciplines in the modern sense of the term. Influential traditions in the history of philosophy include Western, Arabic–Persian, Indian, and Chinese philosophy. Western philosophy originated in Ancient Greece and covers a wide area of philosophical subfields. A central topic in Arabic–Persian philosophy is the relation between reason and revelation. Indian philosophy combines the spiritual problem of how to reach enlightenment with the exploration of the nature of reality and the ways of arriving at knowledge. Chinese philosophy focuses principally on practical issues in relation to right social conduct, government, and self-cultivation.</Text>
          </View>

          <View style={{backgroundColor: "#fff", padding: 16, borderRadius: 20, gap: 16}}>
            <Text style={defaultStyles.h2}>Mission</Text>
            <Text style={[defaultStyles.p, {textAlign: "justify"}]}>To prepare student to become useful citizens, God-fearing, value-oriented and disciplined individuals, who are universally competitive professionals engaged in the noble task of uplifting the quality of life in the community.</Text>
          </View>

          <View style={{backgroundColor: "#fff", padding: 16, borderRadius: 20, gap: 16}}>
            <Text style={defaultStyles.h2}>Vision</Text>
            <Text style={[defaultStyles.p, {textAlign: "justify"}]}>Transform individuals into responsible citizens capable of meeting the challenges of modern times.</Text>
          </View>
        </View>
      </ScrollView>

      <MenuModal modalVisible={modalVisible} toggleModal={toggleModal} />
    </Background>
  )
}

const styles = StyleSheet.create({})