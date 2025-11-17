import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/Facebook.svg.png')}
        style={styles.logo}
      />

      <TextInput
      placeholder="email ou telefone"
      style={styles.input}
      />

      <TextInput
      placeholder='senha'
      style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.cadastro}>Cadastre-se no Facebook</Text>
    </View>
)};
