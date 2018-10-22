import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { addTemplateString } from '../../store/templates';
import { templatePlaceholder } from '../../config/settings';

import Feedback from '../../components/Feedback/Feedback';

class AddMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateTitle: '',
      templateString: '',
      feedback: ''
    };
  }

  onTemplateStringChange = templateString => {
    this.setState({
      ...this.state,
      templateString
    });
  };

  onTemplateTitleChange = templateTitle => {
    this.setState({
      ...this.state,
      templateTitle
    });
  };

  addTemplate = () => {
    const { templateString, templateTitle } = this.state;
    const { navigator } = this.props;
    if (templateString.trim().length !== 0 && templateTitle.trim().length !== 0) {
      if (templateString.search(templatePlaceholder) > 0) {
        this.props.addTemplateString(templateString, templateTitle);
        this.setState({
          ...this.state,
          feedback: ''
        });
        navigator.pop();
      } else {
        this.setState({
          ...this.state,
          feedback: "String must contain '%barcode%'."
        });
      }
    } else {
      this.setState({
        ...this.state,
        feedback: "Templates can't be emtpy."
      });
    }
  };

  render() {
    const { templateTitle, templateString, feedback } = this.state;
    return (
      <View style={styles.container}>
        <Text>Template Title</Text>
        <TextInput style={styles.input} onChangeText={this.onTemplateTitleChange} value={templateTitle} />
        <Text>Template String</Text>
        <TextInput style={styles.input} onChangeText={this.onTemplateStringChange} value={templateString} />
        <View style={styles.buttonAdd}>
          <Button color="#3385ff" title="OK" onPress={this.addTemplate} />
        </View>
        <Feedback message={feedback} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  input: {
    height: 40
  },
  buttonAdd: {
    paddingTop: 15
  }
});

const mapDispatchToProps = {
  addTemplateString
};

export default connect(
  null,
  mapDispatchToProps
)(AddMenu);
