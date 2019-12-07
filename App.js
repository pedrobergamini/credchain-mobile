import React from 'react';
import { View } from 'react-native';
import createRouter from './src/routes';

export default function App() {
  const Routes = createRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Routes />
    </View>
  );
}
