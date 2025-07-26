import { StyleSheet, useColorScheme } from 'react-native'
import setIsDarkMode from "./screens/SettingsScreen"


const mainFontFam = 'Noto Sans' // i will change it later
const warmdarkpurplecolor = "#D9D9D9" // setIsDarkMode ? "purple" : "#5A3353"
const textOnDarkBg = "#fff" // setIsDarkMode? "#000000" : "#ffffff"
const iconbgcolor = "#bdc0e5" // setIsDarkMode ? "purple" : "#BDC0E5" // BFC6E5
const textDark = "#000000"// setIsDarkMode? "#ffffff" : "#000000"
const iconcolor = "#000000"// setIsDarkMode ? "#ffffff" : "#000000"

export const styles = StyleSheet.create({
  background: {
    flex: 1,

    resizeMode: 'cover',
  },
  background1: {
    
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'black'
  },
    background2: {
      
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    height: '100%'
  },
  header: {
  marginTop: 30,
  fontSize: 27,
  fontFamily: mainFontFam,
  fontStyle: "bold",
  // textShadowRadius: 16,
  // textShadowColor: "#ffb6c1",
  // textShadowOffset: { width: 0, height: 2 },
  textAlign: 'center',
  // backgroundColor: "#d9d9d9",
  },
  textInputContainer: {
    marginHorizontal: 20,
    backgroundColor: warmdarkpurplecolor,
    padding: 5,
    justifyContent: "center",
    borderRadius: 15,
    marginVertical: 10,
  },
  textInput: {
    padding: 5,
    backgroundColor: textOnDarkBg,
    color: textDark,
    borderRadius: 8,
    margin: 8
  },
  basicText: {
    marginTop: 10,
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: mainFontFam,
    color: textDark,
  },
  nextButton: {
    borderRadius: 6,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    marginLeft: "80%",
    backgroundColor: warmdarkpurplecolor,
    width: "15%",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: mainFontFam,
    color: textDark,
    textAlign: "center",
  },
  linkText: {
    color: "#2323ff",
    padding: 5,
    marginLeft: 20,
    // backgroundColor: 

  },
  switch: {
    marginVertical: 10,
    marginHorizontal: 5,
  },

  //Stelmakh: putting the explore page styles separately for now, can be combined with the rest on a later date

  exploreView: {
    flex: 1,
    flexDirection: 'column',
  },
  profileBoxView: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#C63B62',
    height: '100%',
    padding: 5,
    
  },
  profileImgView: {
    // display: flex,
    margin: 10,
    flex: 1,
    height: "100%",
    width: "10%",
  },
  profileTextBox:{
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  usernameText:{
    flex:1,
    margin: 10,
    fontSize: 20,
    color: textDark,
    fontFamily: mainFontFam,
  },
  hashtagsText:{
    flex:1,
    margin: 10,
    fontSize: 20,
    color: 'red',
    fontFamily: mainFontFam,
  },
    
  // settings screen styles
  settingsBlock: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: 30,
  },

  settingsText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: mainFontFam,
    color: textOnDarkBg,
  },
  collapsedContent: {
    marginVertical: 5,
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 75,
    marginRight: 40,
    fontFamily: mainFontFam,
    color: textOnDarkBg,
  },
  settingsIcon: {
    fontSize: 20,
    marginVertical: 8,
    marginRight: 7,
    borderRadius: 14,
    padding: 4,
    color: iconcolor,
    backgroundColor: iconbgcolor,
  },
  settingsSwitch: {
    marginLeft: 'auto',
  },
  


  // profile image upload
  imagePick:{
    width: "85%",
    backgroundColor: warmdarkpurplecolor,
    justifyContent: "center",
    alignContent:"center",
    alignSelf:"center",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  }, 
  musicButton:{
    borderRadius: 10,
    marginHorizontal: 100,
    marginBottom: 10,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    overflow: 'hidden',
    color: textDark,

  }
})