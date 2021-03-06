/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import Base64 from 'Base64';

import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import * as animationData from '../../assets/animations/588-wallet-coin.json';

import { Container, Title, Head, Info, AudioButton } from './styles';
import Background from '../../components/Background/index.js';
import Header from '../../components/Header/index.js';

export default function Payments() {
  const [audioPermission, setAudioPermission] = useState(false);
  const [recordingAudio, setRecordingAudio] = useState(false);

  const recording = new Audio.Recording();

  async function askForPermissions() {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

    setAudioPermission(response);
  }

  useEffect(() => {
    askForPermissions();
  }, []);

  useEffect(() => {
    async function recordAudio() {
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
    }
    if (recordingAudio) {
      recordAudio();
    }
  }, [recording, recordingAudio]);

  async function handleAudioRecording() {
    if (!audioPermission) {
      alert('Habilite a Permissão de Áudio para continuar');
      askForPermissions();
      return;
    }

    if (!recordingAudio) {
      setRecordingAudio(true);
      return;
    }

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1200);
    });
    Alert.alert(
      'Status da Transferência',
      'Você acaba de transferir 25 reais para Pedro Mello'
    );
    await recording.stopAndUnloadAsync();

    const { uri: audioUri } = await FileSystem.getInfoAsync(recording.getURI());
    console.log(Base64.btoa(audioUri));
    setRecordingAudio(false);
  }

  return (
    <Background>
      <Header />
      <Container>
        <Head>
          <Title>Fale com Satoshi</Title>
        </Head>
        <Info>
          <LottieView
            source={animationData}
            autoPlay
            loop
            style={{ flex: 1 }}
          />
        </Info>
        <View>
          <AudioButton
            onPress={handleAudioRecording}
            isRecording={recordingAudio}
          >
            <MaterialCommunityIcons name="microphone" size={50} color="#fff" />
          </AudioButton>
        </View>
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <MaterialIcons name="attach-money" size={30} color={tintColor} />
);

Payments.navigationOptions = {
  tabBarLabel: 'VoicePay',
  tabBarIcon,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
