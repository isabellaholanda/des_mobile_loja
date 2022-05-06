import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


import Itens from '../../components/Itens';


const width = Dimensions.get('screen').width;


export default function Home() {
  const navigation = useNavigation();
  return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Image
          source={require('../../images/membros.jpeg')}
          style={styles.image}
       />

       <View style={styles.textContainer}>
        <Text style={styles.text}>KIMONOS</Text>
        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf:'center'}}>
            <MaterialIcons
              name="menu"
              size={24}
              color="#000"
            />
          </TouchableOpacity>

       </View>
     </View>

     <View style={styles.line}/>

     <ScrollView>
        <Text style={{fontFamily: 'Anton_400Regular', left: 2, alignSelf:'center', marginTop: '2%', marginBottom: '2%', fontSize: 24}}>NOSSOS PRODUTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Itens img={require('../../images/kimono_frente_preto.jpeg')} cost="R$ 299" onClick={()=> navigation.navigate('Details')}>
          Kimono Preto Logo Gigueto
          </Itens>
          <Itens img={require('../../images/kimono_frente_azul.jpeg')} cost="R$ 299,00" onClick={()=> alert('CLICOU')}>
          Kimono Azul Logo Gigueto
          </Itens>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Itens img={require('../../images/kimono_frente_branco.jpeg')} cost="R$ 299,00" onClick={()=> alert('CLICOU')}>
          Kimono Branco Logo Gigueto
          </Itens>
          <Itens img={require('../../images/kimono_frente_preto_linha_rosa.jpeg')} cost="R$ 299,00" onClick={()=> alert('CLICOU')}>
          Kimono Preto Linha Rosa Logo Gigueto
          </Itens>

        </View>
        

      </ScrollView>


   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  header:{
    marginBottom: 8
  },

  image:{
    width: '100%',
    height: 770 / 1590 * width,
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },

  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },

  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2,
  }


});