import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
        source={require('./assets/TwitterLogo.jpg')}
        style={styles.logo}
        />
        <Text style={styles.inscrever}>Inscreva-se</Text>
        <Image
        source={require('./assets/pontos.png')}
        style={styles.logo}
        />
      </View>
    
      <Text style={styles.textoEntrar} >Entrar no Twitter.</Text>
      <Text style={styles.textoCadastro}>Celular, Email ou Nome do Usuário</Text>
      <View style={styles.linha1} />
      <Text style={styles.textoCadastro}>Senha</Text>
      <View style={styles.linha2} />
      <View style={styles.linhaFinal} />
      <View style={styles.containerPe}>
        <Text>Esqueceu sua senha?</Text>
        <TouchableOpacity style={styles.botaoEntrar}>
          <Text style={styles.entrar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )};