import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {icons} from '../../navigator';

export default function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={icons.eatmelogo} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.headerText}>SEARCHING</Text>
      </View>
      <View style={styles.search}>
        <View style={styles.searchInput}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Searching for something?"
            // value={}
            // onChangeText={text => this.setState({email: text})}
          />
        </View>
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 12,
    top: 35,
  },
  header: {
    position: 'absolute',
    top: 100,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6C44',
  },
  search: {
    position: 'absolute',
    width: WIDTH - 24 * 2,
    height: 81,
    top: 150,
    left: 24,
  },
  searchInput: {
    width: WIDTH - 35 * 2,
    height: 60,
    top: 20,
    borderRadius: 8,
    left: 8,
    backgroundColor: '#F5F5F8',
  },
});
