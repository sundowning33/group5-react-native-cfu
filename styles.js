import { StyleSheet, useColorScheme } from 'react-native'
import setIsDarkMode from "./screens/SettingsScreen"

const mainFontFam = 'Noto Sans' // i will change it later
const warmdarkpurplecolor = "#5A3353" // setIsDarkMode ? "purple" : "#5A3353"
const textOnDarkBg = "#fff" // setIsDarkMode? "#000000" : "#ffffff"
const iconbgcolor = "#bdc0e5" // setIsDarkMode ? "purple" : "#BDC0E5" // BFC6E5
const textDark = "#000000"// setIsDarkMode? "#ffffff" : "#000000"
const iconcolor = "#000000"// setIsDarkMode ? "#ffffff" : "#000000"

export const styles = StyleSheet.create({
  //Login, sign in, create group page
  background: {
    // flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',

  },
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
  },
  header: {
    marginTop: 30,
    // alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: mainFontFam,
    textShadowRadius: 2,
    textShadowColor: textDark,
    textShadowOffset: { width: 1, height: 1 },
    textAlign: 'center'
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
    justifyContent: 'center',
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: mainFontFam,
    color: textOnDarkBg,
  },
  nextButton: {
    borderRadius: 10,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    marginLeft: "80%",
    backgroundColor: warmdarkpurplecolor,
    width: "15%",
  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: mainFontFam,
    color: textOnDarkBg,
    textAlign: "center",
  },
  linkText: {
    color: "blue",
    padding: 5,
    marginLeft: 20,

  },
  switch: {
    marginVertical: 10,
    marginHorizontal: 5,
  },

  //Stelmakh: explore page styles explore page styles 

  exploreView: {
    flex: 1,
    flexDirection: 'column',
  },
  profileBoxView: {
    display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
    margin: 5,
    backgroundColor: warmdarkpurplecolor,
    height: 200,
    width:"45%",
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    
  },
  profileImgView: {
    // display: flex,
    borderRadius: 55,
    margin: 5,
    alignSelf:'center',
    // flex: 1,
    height: 100,
    width: 100,
  },
  profileTextBox:{
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    // flex: 2,
  },
  usernameText:{
    // flex:1,
    margin: 5,
    fontSize: 20,
    color: 'white',
    fontFamily: mainFontFam,
  },
  hashtagsText:{
    // flex:2,
    fontSize: 15,
    opacity: 0.4,
    color: 'white',
    fontFamily: mainFontFam,
  },
  searchBarLine:{
    backgroundColor:warmdarkpurplecolor,
    height:50,
    padding:5,
  },
  searchBarField:{
    backgroundColor:'#8a5a7fff',
    flex:1,
    // padding: 3,
    borderRadius: 50,
  },
  searchBarText:{
    fontFamily: mainFontFam,
    fontSize: 15,
    color:'black',
  },

  // error

  errorText:{
    fontFamily: mainFontFam,
    fontSize: 40,
    color: warmdarkpurplecolor,
  },
    
  // settings screen styles settings screen styles
  settingsBlock: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: 30,
  },

  settingsText: {
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: mainFontFam,
    color: textDark,
  },
  collapsedContent: {
    marginVertical: 5,
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 75,
    marginRight: 40,
    fontFamily: mainFontFam,
    color: textDark,
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
    alignItems: "flex-end",
    flex: 1,
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
    backgroundColor: "#5A3353",
    overflow: 'hidden',

  }
})
