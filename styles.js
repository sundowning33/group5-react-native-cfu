import { StyleSheet } from 'react-native'

const mainFontFam = 'Helvetica' // i will change it later

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  imageStyle: {

  },
  container: {
    flex: 1,
    height: '100%'
  },
  header: {
    marginTop: 30, // it should be a bit lower like in the figma prototype
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: mainFontFam,
    textShadowRadius: 2,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
  },
  nextButton: {

  },
  buttonText: {

  },
  linkText: {

  },
})
