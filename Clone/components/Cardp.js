import { View, Text , StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native'
import React from 'react'

const Cardp = ({Role, Paycheck, Comp, Locat, Logo2}) => {
  return (
    <View style={styles.cards2}>
    <View style={styles.subCard2}>
      <View style={styles.flexCard}>
        <View>
        <Image
        style={styles.cardImage}
          source={Logo2}
          />
        </View>

        <View style={styles.flexColumn}>

          <View style={styles.flexCard}>
           <Text style={styles.t2}>{Role}</Text>
           <Text style={styles.t3}> {Paycheck}</Text>
          </View>

          <View style={styles.flexCard2}>
            <Text>{Comp}</Text>
            <Text style={styles.t1}>                 {Locat}</Text>
          </View>

        </View>

      </View>
    </View>
    </View>
  )
}

const styles= StyleSheet.create({
  cards2:{
    marginTop:10,
    width: 327,
    height: 74,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  subCard2:{
    width: 300,
    height: 60,
    // backgroundColor: 'white',
    justifyContent: 'center',
      alignContent: 'center',
      margin: 6.5
  },
  flexCard:{
    flexDirection: 'row',
    marginBottom: 7,
    padding: 2,
  },
  flexCard2:{
    flexDirection: 'row',
    
  },
  flexColumn:{
    flexDirection: 'column',
    paddingLeft:12, 
  },
  t2:{
  fontWeight: 'bold',
  fontSize: 16,
  color: '#0D0D26',
  },
  t3:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#0D0D26',
    marginLeft:'auto',
    },
  t1:{
    marginLeft:'auto',
    color:'#0D0D26'
  },
  cardImage:{
    marginTop:3
  }
  })
export default Cardp