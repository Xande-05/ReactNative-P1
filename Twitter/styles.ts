import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  textoEntrar:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '90%',
  },

  textoCadastro:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '90%',
    marginTop: 20,
  },

  inscrever:{
    fontSize: 15,
    color: '#1688cfff',
    textAlign: 'right',
    marginLeft: 100,
  },

  linha1:{
    width: '90%',
    height: 1.5,
    backgroundColor: '#1d6d9bff',
    alignSelf: 'center',
    marginVertical: 20,
  },

  linha2:{
    width: '90%',
    height: 1.5,
    backgroundColor: '#000000ff',
    alignSelf: 'center',
    marginVertical: 20,
  },

  linhaFinal:{
    width: '100%',
    height: 1,
    backgroundColor: '#000000ff',
    alignSelf: 'center',
    marginVertical: 20,
    marginTop: 400,
  },

  botaoEntrar:{
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1688cfff',
    paddingVertical: 10,
  },

  entrar:{
    color: '#ffffff',
  },

  containerHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },

  containerPe:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default styles;