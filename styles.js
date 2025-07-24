import { StyleSheet, useColorScheme } from 'react-native'
import setIsDarkMode from "./screens/SettingsScreen"

const mainFontFam = 'Noto Sans' // i will change it later
const warmdarkpurplecolor = "#5A3353" // setIsDarkMode ? "purple" : "#5A3353"
const textOnDarkBg = "#fff" // setIsDarkMode? "#000000" : "#ffffff"
const iconbgcolor = "#bdc0e5" // setIsDarkMode ? "purple" : "#BDC0E5" // BFC6E5
const textDark = "#000000"// setIsDarkMode? "#ffffff" : "#000000"
const iconcolor = "#000000"// setIsDarkMode ? "#ffffff" : "#000000"

export const styles = StyleSheet.create({
  //Stelmakh: Login page, maybe some other pages
  background: {
    // flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',

  },
  container: {
    // flex: 1,
    height: '100%'
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
  // Stelmakh: I'll make the Profile page too, since Sofia isn't with us anymore
})
