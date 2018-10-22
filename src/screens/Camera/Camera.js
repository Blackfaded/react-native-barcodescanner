import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webviewOpen: false
    };
  }

  onBarCodeRead = async ({ data }) => {
    console.log(data);
    const template = this.props.templateString;
    const regex = /%barcode%/g;
    const replaced = template.search(regex) >= 0;
    if (replaced) {
      try {
        const url = template.toLowerCase().replace('%barcode%', data);
        if (!this.state.webviewOpen) {
          this.props.navigator.pop();
          this.props.navigator.push({
            screen: 'barcodescanner.Webview',
            title: 'Webview',
            passProps: {
              url
            }
          });
        }
        this.setState({
          ...this.state,
          webviewOpen: true
        });
      } catch (e) {
        console.log('Dont know how to open URI');
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your camera phone"
          onBarCodeRead={this.onBarCodeRead}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default Camera;
