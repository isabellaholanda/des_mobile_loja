import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Itens(props) {

  function filterDesc(desc){
    if(desc.length < 27){
      return desc;
    }
    return `${desc.substring(0, 23)}...`;
  }

 return (

   
  <TouchableOpacity style={styles.container} onPress={props.onClick}>
    <Image
     source={props.img}
     style={styles.itensImg}
    />
  <Text style={styles.itensText}>
    {filterDesc(props.children)}
  </Text>
  <View opacity={0.4}>
    <Text style={styles.itensText}> {props.cost} </Text>
  </View>      
</TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container:{
    marginLeft: '2%',
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itensImg:{
    marginHorizontal: '30%',
    marginTop: '5%',
    width: 150,
    height: 150,
  }, 

  itensText:{
    marginHorizontal: '30%',
    fontSize: 16,
    alignSelf: 'center'

  }
});
