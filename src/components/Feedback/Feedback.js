import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Feedback extends Component {
  render() {
    const { message } = this.props;
    const renderFeedback = message ? <Text style={styles.feedbackText}>{message}</Text> : <View />;

    return <View style={styles.container}>{renderFeedback}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  feedbackText: {
    color: 'red'
  }
});

export default Feedback;
