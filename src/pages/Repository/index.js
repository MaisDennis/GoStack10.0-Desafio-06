/* eslint-disable react/prop-types */
import React from 'react';
import WebView from 'react-native-webview';

// import { Container } from './styles';

export default function Repository({ route }) {
  const { repository } = route.params;
  return <WebView source={{ uri: repository.html_url }} />;
}
