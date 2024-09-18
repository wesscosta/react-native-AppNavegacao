import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default CountyScreen = () => {
  const [cep, setCep] = useState('');
  const [concelho, setConcelho] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para buscar o endereço pelo CEP
  const fetchAddress = async () => {

  
    setLoading(true);
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const data = await response.json();

      if (data.erro) {
        Alert.alert('Erro', 'Sem Concelhos no Momento!');
        setAddress(null);
      } else {
        setAddress(data.slip.advice);
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao buscar um Concelho.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presione o Butão para gerar uma frase</Text>


      <Button title="Carregar Concelho" onPress={fetchAddress} />

      {loading && <Text style={styles.loading}>Carregando...</Text>}
      

      {concelho && (
        <View style={styles.result}>
          <Text style={styles.text}>Concelho: {concelho}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});

