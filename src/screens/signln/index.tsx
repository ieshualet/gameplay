import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import {TextInput }  from 'react-native'
import { useState } from 'react';

export function Signin() {

const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text>primeiro projeito da letícia-orgulhosa</Text>
      <TextInput style={{width:200, height:50, borderWidth:3}} onChangeText={setText}/>
        <Text> Você digitou: {text} </Text>
        <Text> Que legal!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


