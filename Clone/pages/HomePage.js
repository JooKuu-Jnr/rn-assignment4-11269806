import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Cardp from '../components/Cardp';
import Data from '../Data1.json';
import Dataa from '../Data2.json';




const Homepage = ({route}) => {
    const { username, email } = route.params;

    const [data, setData] = useState(Data); 
    const [dataa, setDataa] = useState(Dataa); 
    
    const getLogoSource = (company) => {
      switch (company) {
        case 'Facebook':
          return require('../assets/fb.png');
        case 'Google':
          return require('../assets/g.png');
        
        default:
          return require('../assets/fb.png'); // A default logo if no match is found
      }
    };
      const getLogo2Source = (Comp) => {
        switch (Comp) {
          case 'Burger King':
            return require('../assets/burger.png');
          case 'Google Shop':
            return require('../assets/google2.jpg');
          case 'Costco Mart':
              return require('../assets/beats.png');
          
          default:
            return require('../assets/burger.png'); // A default logo if no match is found
        }
    };
  return (
    <View style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >

      <View style={styles.overview}>
        <View style={styles.info}>
          <View>
            <Text style={styles.text}>{username}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>

          <View style={styles.image}>
            <Image source={require("../assets/Ellipse.png")} />
          </View>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.search}>
            <Image
              style={styles.icon}
              source={require("../assets/search.png")}
            />
            <TextInput placeholder="Search for a job or position"></TextInput>
          </View>

          <View style={styles.filter}>
            <TouchableOpacity style={styles.button}>
              <Image source={require("../assets/filter.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.featuredJobs}>
            <Text style={styles.h1}>Featured Jobs</Text>
            <TouchableOpacity style={styles.h2}>
              <Text style={styles.h2}>See all</Text>
            </TouchableOpacity>
        </View>
       
        
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card 
              profession={item.Profession}
              Logo={getLogoSource(item.Company)}
              Company={item.Company} 
              Salary={item.Salary}
              Address={item.Address}
              backgroundColor={item.backgroundColor}
            />
          )}
          keyExtractor={item => item.id.toString()} 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
        />



         <View style={styles.PopularJobs}>
            <Text style={styles.h1}>Popular Jobs</Text>
            <TouchableOpacity style={styles.h2}>
              <Text style={styles.h2}>See all</Text>
            </TouchableOpacity>
        </View>

        <FlatList
          data={dataa}
          renderItem={({ item }) => (
            <Cardp 
              Role={item.Role}
              Logo2={getLogo2Source(item.Comp)}
              Comp={item.Comp} 
              Paycheck={item.Paycheck}
              Locat={item.Locat}
            />
          )}
          keyExtractor={item => item.id.toString()} 
          
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
        />


      </View>
      </ScrollView>
    </View>
  );
}

const styles= StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:'#FAFAFD',
    justifyContent: 'center',
    paddingLeft: 18,
    // paddingRight: 18,
    paddingTop: 20,
    alignItems: 'center'
    },
overview:{
    flex:1,
    paddingTop:50
    
},
info:{
    flexDirection: 'row',
    paddingRight: 30,
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
    paddingTop: 30,
    paddingRight: 30,
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
},
featuredJobs:{
    flexDirection: 'row',
    paddingTop: 26,
    paddingRight: 30,
},
PopularJobs:{
  flexDirection: 'row',
  paddingTop: 26,
  paddingRight: 30,
},
h1:{
    fontSize: 16,
    fontWeight: 'bold',
},
h2:{
    marginLeft: 'auto',
    color: '#95969D'
},
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
},
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

export default Homepage;
