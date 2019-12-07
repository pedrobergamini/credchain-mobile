import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// import { Container } from './styles';

export default function createRouter() {
  createAppContainer(
    createBottomTabNavigator()
  );
}
