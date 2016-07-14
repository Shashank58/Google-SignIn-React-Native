/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Login from './Login';

AppRegistry.registerComponent('ReactGoogleSignIn', () => Login);
