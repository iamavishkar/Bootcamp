import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mandatory: {
    color: '#ff0000',
  },
  header: {
    width: 373,
    height: 188,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    width: width - 40,
    paddingHorizontal: 20,
  },
  inputInline: {
    width: width / 2 - 30,
  },
  inputLabel: {
    fontWeight: Fonts.weight.medium,
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    height: height,
    width: width - 40,
    alignSelf: 'center',
  },
  backArrow: {
    height: 18,
    width: 10,
    position: 'absolute',
    left: 0,
    top: 10,
  },
  logo: {
    width: 142,
    height: 53,
  },
  topbarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  branding: {
    fontFamily: Fonts.fontFamily.BebasNeueBold,
    fontSize: 38,
    fontWeight: Fonts.weight.bold,
    color: 'black',
    top: -5,
  },
  contentContainer: {flex: 1},
  contentText: {
    fontFamily: Fonts.fontFamily.PoppinsRegular,
    fontSize: 16,
    fontWeight: Fonts.weight.normal,
    color: 'black',
  },
  buttonContainerParent: {bottom: 10},
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: '#7A4ED9',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Fonts.fontFamily.GilroyMedium,
    fontSize: 20,
    fontWeight: Fonts.weight.normal,
    color: '#ffffff',
    paddingVertical: 15,
  },
  sendButtonText: {
    fontFamily: Fonts.fontFamily.BebasNeueBold,
    fontSize: 18,
    fontWeight: Fonts.weight.bold,
    color: '#ffffff',
    paddingVertical: 15,
  },
  formTextContainer: {
    top: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  formHead: {
    fontFamily: Fonts.fontFamily.BebasNeueBold,
    fontSize: 36,
    fontWeight: Fonts.weight.bold,
    color: 'black',
  },
  formDesc: {
    fontSize: 10,
  },
  formAreaContainer: {
    height: 100,
    top: 50,
  },
  formAreaText: {
    fontFamily: Fonts.fontFamily.BebasNeueRegular,
    fontSize: 22,
    fontWeight: Fonts.weight.normal,
    color: '#7A4ED9',
  },
  bgTextContainer: {
    flex: 1,
    position: 'absolute',
    top: 500,
    left: 120,
  },
  bgText: {
    fontFamily: Fonts.fontFamily.BebasNeueBold,
    fontSize: 110,
    textAlign: 'right',
    width: '100%',
    fontWeight: Fonts.weight.bold,
    color: '#F7EFFF',
    transform: [{rotate: '90deg'}],
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    margin: 10,
    fontFamily: Fonts.fontFamily.BebasNeueRegular,
    fontSize: 16,
    fontWeight: Fonts.weight.normal,
    color: 'black',
  },
});

export default styles;
