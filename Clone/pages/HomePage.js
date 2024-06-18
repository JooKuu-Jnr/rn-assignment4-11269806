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

        <View style={styles.cards}>
            <View style={styles.subCard}>
              <View style={styles.cardTop}>
                <View style={styles.iconHolder}>
                  <Image
                    style={styles.fb}
                    source={require("../assets/fb.png")}
                  />
                </View>

                <View style={styles.cardTopText}>
                  <Text style={styles.cardH1}>Software Engineer</Text>
                  <Text style={styles.cardH2}>Facebook</Text>
                </View>
              </View>

              <View style={styles.cardBottom}>
                <Text style={styles.cardH3}>$180,00</Text>
                <Text style={styles.cardH4}>Accra, Ghana</Text>
              </View>

            </View>
         </View>

         <View style={styles.featuredJobs}>
            <Text style={styles.h1}>Popular Jobs</Text>
            <TouchableOpacity style={styles.h2}>
              <Text style={styles.h2}>See all</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.cards2}>
            <View style={styles.subCard2}>
              <View style={styles.flexCard}>
                <View>
                <Image
                style={styles.cardImage}
                  source={require("../assets/burger.png")}
                  />
                </View>

                <View style={styles.flexColumn}>

                  <View style={styles.flexCard}>
                   <Text style={styles.t2}>Jr Executive</Text>
                   <Text style={styles.t1}> $96,000/y</Text>
                  </View>

                  <View style={styles.flexCard2}>
                    <Text>Burger King</Text>
                    <Text style={styles.t1}>                 Los Angels, US</Text>
                  </View>

                </View>

              </View>
              

              

            </View>
         </View>



        

      </View>
    </View>
  );
}

const styles= StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:'#FAFAFD',
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
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
},
featuredJobs:{
    flexDirection: 'row',
    paddingTop: 26
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
  backgroundColor: '#34A853',
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
t1:{
  marginLeft:'auto',
  color:'#0D0D26'
},
cardImage:{
  marginTop:3
}


})

export default Homepage;
