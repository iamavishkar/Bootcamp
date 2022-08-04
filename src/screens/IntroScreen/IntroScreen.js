import React from 'react';
import styles from './styles';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
const APP_ICON = require('../../assets/images/icon_white.png');
const BG_IMG = require('../../assets/images/intro_bg.png');
const HEAD_IMG = require('../../assets/images/header_white.png');
const INFO_ICON = require('../../assets/images/info.png');

const IntroScreen = props => {
  return (
    <View style={styles.root}>
      <ImageBackground source={BG_IMG} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <ImageBackground
            source={HEAD_IMG}
            resizeMode="cover"
            style={styles.header}>
            <View style={styles.topbarContainer}>
              <Image source={APP_ICON} style={{width: 181, height: 68}} />
              <Text style={styles.branding}>SPRY ROCKS</Text>
            </View>
          </ImageBackground>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Welcome!</Text>
          </View>
          <View style={styles.centerButtonsContainer}>
            <Text style={styles.detailText}>Want to be a part of team?</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={1}
              onPress={() => {
                props.navigation.navigate('FormScreen');
              }}>
              <Text style={styles.buttonText}>Send Form</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Image
              source={INFO_ICON}
              style={{width: 24, height: 24, bottom: 10}}
            />
            <Text style={styles.footerText}>spryrocks.com</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
