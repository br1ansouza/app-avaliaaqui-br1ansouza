import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

interface RouteParams {
  id?: number; // ID opcional do carro
}

export default function Avaliation() {
  const route = useRoute();
  const params = route.params as RouteParams; // Recebendo o ID do carro
  const productId = params?.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [experience, setExperience] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0); // Para armazenar a avaliação por estrelas
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Para a imagem enviada

  const validateAndSubmit = async () => {
    if (!name || !email || !feedback || !experience || rating === 0) {
      Alert.alert('Preencha todos os campos, por favor!');
      return;
    }

    const data = {
      id: productId,
      name: name,
      email: email,
      feedback: feedback,
      experience: experience,
      recommend: recommend,
      rating: rating,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        'http://192.168.17.6:3000/evaluations',
        data,
      );
      Alert.alert('Sucesso', 'Avaliação enviada!');
      clearFields();
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao enviar sua avaliação.');
    } finally {
      setLoading(false);
    }
  };

  const selectImage = () => {
    // função de abrir a galeria e selecionar uma imagem - usando um pacote como expo-image-picker
    // mais tarde colocar aqui a lógica de abrir a galeria e selecionar uma imagem.
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Ionicons
            name={i <= rating ? 'star' : 'star-outline'}
            size={28}
            color={i <= rating ? '#c84648' : '#703e3b'} // Estrela cheia ou vazia
          />
        </TouchableOpacity>,
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  function clearFields() {
    setName('');
    setEmail('');
    setFeedback('');
    setExperience('');
    setRecommend(false);
    setRating(0);
    setSelectedImage(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avalie o Veículo</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor={'#d3c8b4'}
        value={name}
        onChangeText={setName}
        cursorColor={'#000'}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor={'#d3c8b4'}
        value={email}
        onChangeText={setEmail}
        cursorColor={'#000'}
      />
      <TextInput
        style={styles.input}
        placeholder="Descreva sua experiência com o automóvel..."
        placeholderTextColor={'#d3c8b4'}
        value={feedback}
        onChangeText={setFeedback}
        multiline
        cursorColor={'#000'}
      />
      <Text style={styles.subtitle}>Como foi sua experiência?</Text>
      <View style={styles.experienceContainer}>
        <TouchableOpacity
          style={[
            styles.experienceButton,
            experience === 'Excelente' && styles.selectedButton,
          ]}
          onPress={() => setExperience('Excelente')}
        >
          <Text style={styles.buttonText}>Excelente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.experienceButton,
            experience === 'Boa' && styles.selectedButton,
          ]}
          onPress={() => setExperience('Boa')}
        >
          <Text style={styles.buttonText}>Boa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.experienceButton,
            experience === 'Razoável' && styles.selectedButton,
          ]}
          onPress={() => setExperience('Razoável')}
        >
          <Text style={styles.buttonText}>Razoável</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.experienceButton,
            experience === 'Ruim' && styles.selectedButton,
          ]}
          onPress={() => setExperience('Ruim')}
        >
          <Text style={styles.buttonText}>Ruim</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Avaliação Geral </Text>
      {renderStars()}

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>
          Recomendaria este veículo para outras pessoas?
        </Text>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRecommend(!recommend)}
        >
          <View>
            {recommend ? (
              <MaterialCommunityIcons
                name="checkbox-marked"
                size={26}
                color={'#c84648'}
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={25}
                color="#703e3b"
              />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
        <Text style={styles.imageButtonText}>Adicionar Imagem</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.imagePreview} />}

      <TouchableOpacity style={styles.submitButton} onPress={validateAndSubmit}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.submitButtonText}>Enviar Avaliação</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e7e4d5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#c84648',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e7e4d5',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#2a2a2a',
    color: '#e7e4d5',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#703e3b',
  },
  experienceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  experienceButton: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#703e3b',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#333',
  },
  selectedButton: {
    backgroundColor: '#c84648',
    borderColor: '#703e3b',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff3db',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#703e3b',
  },
  imageButton: {
    backgroundColor: '#703e3b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
  submitButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#c84648',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
