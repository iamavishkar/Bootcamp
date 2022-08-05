import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../theme/Fonts';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    width: 373,
    height: 188,
    justifyContent: 'center',
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 14,
  },
  contentText: {
    fontFamily: Fonts.fontFamily.GorditaRegular,
    fontSize: 18,
    fontWeight: Fonts.weight.normal,
    color: 'black',
    lineHeight: 25,
    textAlign: 'justify',
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
  brandingText: {
    fontFamily: Fonts.fontFamily.GorditaBold,
    fontSize: 18,
  },
});

export default styles;
