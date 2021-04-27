import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import {images, icons, data} from '../../navigator';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'black',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              borderRadius: 8,
              tintColor: 'black',
            }}
            source={icons.list}
          />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 60,
            left: 75,
          }}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            borderRadius: 8,
          }}>
          <Image style={styles.avatarImage} source={images.avatar_3} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 40,
    backgroundColor: 'white',
  },
  headerText: {
    position: 'absolute',
    width: 70,
    height: 30,
    left: '40%',
    top: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 311,
  },
});
