import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#215aa5ff',
    alignItems: 'center',
    justifyContent: 'center',  
    padding : 20,
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
    },

    input: {
    backgroundColor: '#ffffffff',
    width: '90%',
    height: 45,
    borderColor: '#f0f2f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    },

    button: {
        width: '90%',
        height: 45,
        backgroundColor: '#32508bff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    cadastro:{
        color: '#f1f2f3ff',
        marginTop: 300,
        textDecorationLine: 'underline',
    }
});

export default styles;