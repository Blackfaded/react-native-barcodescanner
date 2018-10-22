import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

class AddMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Options</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  }
});

const mapStateToProps = state => ({
  templateStrings: state.templates.templateStrings
});

export default connect(mapStateToProps)(AddMenu);
