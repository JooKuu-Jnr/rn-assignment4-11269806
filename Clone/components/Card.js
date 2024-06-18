import { View, Text , StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native'
import React from 'react'


const Card = ({profession, Company,Salary, Address, backgroundColor, Logo}) => {
  return (
    <View style={[styles.cards, {backgroundColor: backgroundColor}]}>
          <ImageBackground source={require("../assets/mask.png")}>
            <View style={styles.subCard}>
              <View style={styles.cardTop}>
                <View style={styles.iconHolder}>
                  <Image
                    style={styles.fb}
                    source={Logo}
                  />
                </View>

                <View style={styles.cardTopText}>
                  <Text style={styles.cardH1}>{profession}</Text>
                  <Text style={styles.cardH2}>{Company}</Text>
                </View>
              </View>

              <View style={styles.cardBottom}>
                <Text style={styles.cardH3}>{Salary}</Text>
                <Text style={styles.cardH4}>{Address}</Text>
              </View>

            </View>
            </ImageBackground>
         </View>
  )
}

const styles= StyleSheet.create({
cards:{
    marginTop: 10,
    alignItems: 'center',
    width: 280,
    height: 186,
    backgroundColor: '#5386e4',
    borderRadius: 24,
  //   opacity:0.06
  },
  subCard:{
      width:239,
      height: 145,
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignContent: 'center',
      margin: 20
  },
  cardTop:{
      flex:1,
      flexDirection: 'row',
      
  },
  iconHolder:{
      backgroundColor:'#FFFFFF',
      width: 46,
      height: 46,
      borderRadius: 12,
  },
  fb:{
     margin: 12
  
  },
  cardTopText:{
      marginLeft: 13
  },
  cardH1:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
  },
  cardH2:{
      color: 'white'
  },
  cardBottom:{
      flexDirection: 'row',
  },
  cardH3:{
      color: 'white',
      fontSize: 15,
      fontWeight: '500'
  },
  cardH4:{
      marginLeft: 'auto',
      color: 'white',
      fontSize: 15,
      fontWeight: '500'
  }
  })
export default Card