import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const Homepage = ({route}) => {
    const { username, email } = route.params;
  return (
    <View style={styles.container}>

        <View style={styles.overview}>
            <View style={styles.info}>
                <View>
                <Text style={styles.text}>{username}</Text>
                <Text style={styles.email}>{email}</Text>
                </View>

                <View style={styles.image}>
                <Image source={require('../assets/Ellipse.png')}/>
                </View>
            </View>

            <View style={styles.searchSection}>
                {/* <TouchableOpacity> */}
                <View style={styles.search}>
                <Image style={styles.icon} source={require('../assets/search.png')}/> 
                    <TextInput
                    placeholder="Search for a job or position">
                     </TextInput>
                </View>
                {/* </TouchableOpacity> */}
                
                <View style={styles.filter}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/filter.png')}/> 
                    </TouchableOpacity>
                </View>
               

            </View>

                
        </View>
    </View>

 
  )
}

const styles= StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:'#FAFAFD',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20
    // alignItems: 'center',
    },
overview:{
    flex:1,
},
info:{
    flexDirection: 'row'
},
text: {
    // textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
},
email:{
    fontSize: 20,
    color: '#95969D'
},
image:{
   marginLeft: 'auto',
},
searchSection:{
    flexDirection: 'row',
    paddingTop: 30
},
search:{
    flexDirection: 'row',
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    width: 263,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
},
icon: {
    marginRight: 10
},
filter: {
    width: 48,
    height: 48,
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    marginLeft: 'auto'
},
button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}

})

export default Homepage