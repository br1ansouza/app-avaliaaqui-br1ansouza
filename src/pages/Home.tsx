import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const authContext = useContext(AuthContext); 
  const login = authContext?.login; 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>WebCarros</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.textBody}>Compartilhe sua Opinião</Text>
        <Text style={styles.paragraph}>
          Selecione o automóvel que deseja avaliar e ajude outros a fazerem a melhor escolha!
        </Text>
        <TouchableOpacity style={styles.buttonLogin} onPress={login}>
          <Text style={styles.textLogin}>Faça Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c84648', 
    flex: 1,
  },
  header: {
    backgroundColor: '#703e3b',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff3db',
  },
  textHeader: {
    color: '#e7e4d5',
    fontSize: 26, 
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textBody: {
    color: '#d3c8b4',
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    color: '#e7e4d5',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonLogin: {
    backgroundColor: '#fff3db', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  textLogin: {
    color: '#c84648',
    fontSize: 18,
    fontWeight: 'bold',
  },
});