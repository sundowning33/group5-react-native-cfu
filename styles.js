import { StyleSheet } from 'react-native'

const mainFontFam = 'Noto Sans' // i will change it later

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',

  },
  container: {
    flex: 1,
    height: '100%'
  },
  header: {
    marginTop: 30, // it should be a bit lower like in the figma prototype
    // alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: mainFontFam,
    textShadowRadius: 2,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textAlign: 'center'
  },
  textInputContainer: {
    marginHorizontal: 20,
    backgroundColor: "#5A3353",
    padding: 5,
    justifyContent: "center",
    borderRadius: 11,
    marginVertical: 10,
  },
  textInput: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 8,
    margin: 8
  },
  basicText: {
    marginTop: 10, // it should be a bit lower like in the figma prototype
    justifyContent: 'center',
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: mainFontFam,
    color: "white",
  },
  nextButton: {
    borderRadius: 10,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    marginLeft: "80%",
    backgroundColor: '#5A3353',
    height: 30,
    width: "15%",

  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: mainFontFam,
    color: "white",
    textAlign: "center",
  },
  linkText: {
    color: "blue",
    padding: 5,
    marginLeft:20,
    
  },





  settingsBlock:{

  },
})
