import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { deleteTemplateString } from '../../store/templates';

class StartingScreen extends Component {
  openCamera = templateKey => {
    const { templateStrings, navigator } = this.props;
    navigator.push({
      screen: 'barcodescanner.Camera',
      title: 'Camera',
      passProps: {
        templateString: templateStrings.find(template => template.key === templateKey).template // eslint-disable-line
      }
    });
  };

  openAddMenu = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: 'barcodescanner.AddMenu',
      title: 'Add Template'
    });
  };

  showAlert = item => {
    console.log(item);
    Alert.alert(
      'Delete Project?',
      `Do you really want to delete ${item.name} `,
      [{ text: 'Cancel', style: 'cancel' }, { text: 'OK', onPress: () => this.deleteItem(item) }],
      { cancelable: false }
    );
  };

  deleteItem = item => {
    console.log('delte');
    this.props.deleteTemplateString(item.key);
  };

  renderItems = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.button}>
        <Button color="#3385ff" title={item.name} onPress={() => this.openCamera(item.key)} />
      </View>

      <TouchableOpacity onPress={() => this.showAlert(item)}>
        <View>
          <Icon size={30} name="ios-trash" color="lightblue" />
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { templateStrings } = this.props;
    return (
      <View style={styles.container}>
        {templateStrings.length ? (
          <FlatList style={styles.list} data={templateStrings} renderItem={this.renderItems} />
        ) : (
          <View style={styles.placeholder}>
            <Text>Please add at least one project</Text>
          </View>
        )}

        <TouchableOpacity onPress={this.openAddMenu}>
          <View style={styles.addButtonContainer}>
            <Icon size={30} name="ios-add-circle" color="lightblue" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  list: {
    flexGrow: 0
  },
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10
  },
  placeholder: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20
  },
  button: {
    flex: 1,
    paddingRight: 20
  }
});

const mapStateToProps = state => ({
  templateStrings: state.templates.templateStrings
});

export default connect(
  mapStateToProps,
  { deleteTemplateString }
)(StartingScreen);
