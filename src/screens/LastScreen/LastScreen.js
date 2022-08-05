import React from 'react';
import styles from './styles';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
const APP_ICON = require('../../assets/images/icon_color.png');
const HEAD_IMG = require('../../assets/images/header_color.png');
const BACK_ICON = require('../../assets/images/back_arrow.png');

const LastScreen = props => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.bgTextContainer}>
          <Text style={styles.bgText}>SPRY ROCKS</Text>
        </View>
        <ImageBackground
          source={HEAD_IMG}
          resizeMode="cover"
          style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              props.navigation.navigate('IntroScreen');
            }}>
            <Image source={BACK_ICON} style={styles.backArrow} />
          </TouchableOpacity>

          <View style={styles.topbarContainer}>
            <Image source={APP_ICON} style={styles.logo} />
            <Text style={styles.branding}>SPRY ROCKS</Text>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Glad to see you, friend!
            {'\n\n\t\t\t\t'}
            <Text style={styles.brandingText}>SPRY ROCKS</Text> is a rapidly
            developing European company with headquarter at Kharkiv, Ukraine.
            {'\n\n\t\t\t\t'}
            Our company was founded in 2014 and although we are a young team we
            have a lot of successful projects and satisfied customers.
            {'\n\n\t\t\t\t'}
            In work with every particular customer, the main philosophy is to
            establish and keep good relations.
            {'\n\n\t\t\t\t'}
            We develop innovative solutions that not only contribute to the
            success of our customer's businesses but also give them a
            competitive market advantage.
            {'\n\n\t\t\t\t'}
            Because your success is our success too!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LastScreen;
