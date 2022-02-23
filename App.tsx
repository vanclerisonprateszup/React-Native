import React from 'react'
import { 
  View, 
  KeyboardAvoidingView,
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Image,
} from 'react-native'
export default function App() {
  
  return(
    <KeyboardAvoidingView style={styles.pageView}>
      <View style={styles.img}><Image source={require('./arrow.png')} style={{width: 20, height: 20}} /></View>
      <View style={styles.headerView}>
        <Text style={styles.Login}>Login</Text>
        <TouchableOpacity style={styles.register}>
        <Text style={{color: '#363351'}}>Não tem uma conta?
        <Text style={styles.linkAcess}>Cadastre-se</Text>
        </Text>
        </TouchableOpacity>
        </View>
  
      <View style={styles.container}>
        <TextInput 
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
          placeholderTextColor='#363351'
        />
        <TextInput 
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
          placeholderTextColor='#363351'
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkRecover}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  pageView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f1ef'
  },
  linkAcess: {
    fontWeight: 'bold',
    color: '#983659',
  },
  headerView: {
    marginTop: 50,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    width: '90%',
    marginBottom: 15,
    color: '#363351',
    fontSize: 14,
    borderRadius: 50,
    padding: 10,
  },
  inputLogin: {
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttonsbt: {
    color: 'red',
    borderRadius: 50
  },
  btnSubmit: {
    backgroundColor: '#ec184a',
    width: '90%',
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff'
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
  },
  linkRecover: {
    margin: 10,
    color:'#983659',
    fontWeight: 'bold',
  },
  Login: { 
    fontWeight: '500',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#363351',
  },
  register: {
    marginTop: 15,
    color: '#484554',
  },
  img:{
    flex: 1,
    height: 20,
    width: 20,
    marginLeft: 0,
    left: 20,
    top: 20,
    position: 'absolute',
  },

})