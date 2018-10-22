import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';

class Webview extends Component {
  render() {
    const { url } = this.props;
    return <WebView source={{ uri: url }} style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 20 }
});

export default Webview;
