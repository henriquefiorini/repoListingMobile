import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

function Repository({ navigation }) {
  const repository = navigation.getParam('repository');
  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

export default Repository;
