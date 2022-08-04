import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: width,
    justifyContent: 'center',
  },
  header: {flex: 1, width: 515, height: 257, justifyContent: 'center'},
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height,
    width: width,
    backgroundColor: 'rgba(0, 7, 69,0.7)',
  },
  branding: {
    fontFamily: Fonts.fontFamily.BebasNeueBold,
    fontSize: 50,
    fontWeight: Fonts.weight.bold,
    color: 'white',
    top: -5,
  },
  topbarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: Fonts.fontFamily.PoppinsSemiBold,
    fontSize: 46,
    fontWeight: Fonts.weight.bold,
    color: 'white',
    fontSize: 50,
  },
  detailText: {
    fontFamily: Fonts.fontFamily.PoppinsMedium,
    fontSize: 20,
    fontWeight: Fonts.weight.bold,
    color: Colors.white,
    paddingBottom: 5,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 20,
  },
  footerText: {
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    fontFamily: Fonts.fontFamily.BebasNeueBold,
    fontSize: 24,
    fontWeight: Fonts.weight.bold,
    color: 'white',
  },
  centerButtonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: '#7A4ED9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 100,
  },
  buttonText: {
    fontFamily: Fonts.fontFamily.GilroyMedium,
    fontSize: 20,
    fontWeight: Fonts.weight.normal,
    color: '#ffffff',
    paddingVertical: 15,
  },
});

export default styles;
