import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as animationData from '../../assets/animations/2326-coming-soon.json';
import Background from '../../components/Background/index.js';
import Header from '../../components/Header/index.js';

export default function Marketplace() {
  return (
    <Background>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView
          source={animationData}
          style={{ width: 400, height: 400 }}
          autoPlay
          loop
        />
      </View>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <MaterialIcons name="people" size={30} color={tintColor} />
);

Marketplace.navigationOptions = {
  tabBarLabel: 'Marketplace',
  tabBarIcon,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
