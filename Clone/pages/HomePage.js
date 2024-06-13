// HomePage.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.overview}>

        <View style={styles.headerText}>
        <Text style={styles.h1}>Jobizz</Text>
        <Text style={styles.h2}>Welcome Back 👋</Text>
        <Text style={styles.h3}>Let's log in. Apply to jobs!</Text>

        <View style={styles.formSection}>
            <TextInput style={styles.insert}
            placeholder='Name'>

            </TextInput>

            <TextInput style={styles.insert}
            placeholder='Email'>

            </TextInput>

 

        </View>
        <TouchableOpacity
            style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>

        </TouchableOpacity>


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


});

export default HomePage;
