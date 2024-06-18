import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';



const Login = ({ navigation }) => {  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // You can add validation here
    if (username && email) {
      navigation.navigate('Home', { username, email });
    } else {
      alert('Please enter both username and email');
    }
  };
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.overview}>

        <View style={styles.headerText}>
        <Text style={styles.h1}>Jobizz</Text>
        <Text style={styles.h2}>Welcome Back 👋</Text>
        <Text style={styles.h3}>Let's log in. Apply to jobs!</Text>

        <View style={styles.formSection}>
            <TextInput style={styles.insert}
            placeholder='Name'
            value={username}
            onChangeText={setUsername}>

            </TextInput>

            <TextInput style={styles.insert}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}>

            </TextInput>

            <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Log in</Text>

        </TouchableOpacity>

       
        <Text style={styles.line}> ───────  Or continue with  ───────</Text>
       
        
        <View style={styles.icons}>
            <TouchableOpacity style={styles.icons}>
                <Image source={require('../assets/Apple.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
            <Image source={require('../assets/google.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
            <Image source={require('../assets/facebook.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.icons}>
        <Text>Haven't an account?</Text>
        <TouchableOpacity>
            <Text style={styles.register}> Register</Text>
        </TouchableOpacity>
        </View>

        </View>

        </View>


        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FAFAFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overview:{
    paddingLeft: 12,
    paddingRight: 12,
    
  },
  headerText:{
    flex:1,
    alignItems: 'flex-start',
    marginTop: 106,
  },
  h1:{
    fontSize:22,
    color: '#356899',
    fontWeight:'bold',
  },
  h2:{
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold'

  },
  h3:{
    marginTop: 10,
    fontSize: 14,
    color: '#0D0D26'
},
  formSection:{
    marginTop: 20

},
 insert:{
    width: 327,
    height: 52,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    padding: 10
 },
 button:{
    marginTop: 40,
    width: 327,
    height: 56,
    backgroundColor: '#356899',
    borderRadius: 5,
 },
buttonText:{
    paddingTop: 20,
    textAlign:'center',
    color: 'white',
    fontSize: 16,
},

line:{
    marginTop: 40,
    color: '#AFB0B6'
},
icons: {
    marginTop:7,
    flexDirection: 'row',
    justifyContent: 'center'
},
register:{
    color: '#356899'
}

});

export default Login;
