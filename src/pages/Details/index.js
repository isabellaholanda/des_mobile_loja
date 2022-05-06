import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Tamanho from '../../components/Tamanho';
import Button from '../../components/Button';


const width = Dimensions.get('screen').width;

export default function Details({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Kimono Preto (Logo Gigueto)'
  })

 return (
   <ScrollView style={styles.container}>
     <Image
      source={require('../../images/kimono_frente_preto.jpeg')}
      style={styles.image}
      resizeMode="cover"
     />

     <View>
       <Text style={[styles.title, { fontSize: 24 } ]}>R$ 299</Text>
     </View>
     <View opacity={0.4}>
       <Text style={[styles.title, { fontSize: 30 } ]}>Kimono Preto (Logo Gigueto)</Text>
     </View>

     <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Tamanho bgColor="#17181a" color="#FFF" >A1</Tamanho>
            <Tamanho>A2</Tamanho>
            <Tamanho>A3</Tamanho>
          </ScrollView>
      </View>

      <View>
        <Button>

        </Button>
      </View>

  
   </ScrollView>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  image:{
    width: '100%',
    height: 1501 / 1512 * width,
  },

  title:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    paddingHorizontal: '2%',
  },


})