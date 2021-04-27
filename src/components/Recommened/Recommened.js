import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import useRecommended from './useRecommended';
import {icons, images} from '../../navigator';

const renderRecommended = ({item, index}) => {
  console.log('sth');
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.imageUrl}}
          resizeMode="cover"
          style={styles.images}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.calories}>
          <Image
            source={icons.fire}
            style={{width: 12, height: 12, left: 30}}
          />
          <Text style={styles.caloriesText}>{item.calories} Calories</Text>
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Recommened() {
  console.log('sth2');
  const [loading, onRefresh, recommended] = useRecommended();
  return (
    <SafeAreaView>
      {loading && <ActivityIndicator />}
      <FlatList
        data={recommended}
        horizontal
        renderItem={renderRecommended}
        keyExtractor={(item, index) => {
          return 'recommended-' + item.id;
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItem: 'center',
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={() => {
          return <View style={{width: 16}}></View>;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 312,
    height: 160,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 116,
    height: 112,
    borderRadius: 25,
  },
  images: {
    width: 116,
    height: 112,
    top: '25%',
    left: '10%',
    borderRadius: 25,
  },
  detailContainer: {
    marginLeft: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111A2C',
  },
  productDescription: {
    fontSize: 10,
    fontWeight: '500',
    color: '#757D85',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111A2C',
    marginTop: 5,
  },
  calories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  caloriesText: {
    fontSize: 10,
    fontWeight: 'normal',
    color: '#757D85',
    left: 32,
  },
});
