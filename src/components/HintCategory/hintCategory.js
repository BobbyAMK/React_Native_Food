import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {icons, images, data} from '../../navigator';

export default class HintCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: data.restaurantData,
    };
  }
  render() {
    return <View>{this.renderHintCategory()}</View>;
  }

  getCategoryById = id => {
    let category = data.categoryData.filter(a => a.id == id);
    if (category.length > 0) return category[0].name;
    return '';
  };

  renderHintCategory = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            paddingBottom: 15,
            borderRadius: 30,
            backgroundColor: 'white',
            marginBottom: 10,
            marginLeft: 10,
            width: 350,
            height: 150,
          }}>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 25,
            }}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: 90,
                height: 90,
                top: '25%',
                left: '10%',
                borderRadius: 25,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              left: 110,
              bottom: '40%',
            }}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row', left: 110, bottom: 50}}>
            <Image
              source={icons.star}
              style={{
                width: 20,
                height: 20,
                tintColor: 'orange',
                marginTop: 5,
              }}
            />
            <Text
              style={{
                color: 'black',
                marginLeft: 5,
                marginTop: 5,
                fontSize: 18,
              }}>
              {item.rating}
            </Text>
            <View style={{flexDirection: 'row', left: 10}}>
              {item.categories.map(categoryId => {
                return (
                  <View style={{flexDirection: 'row'}} key={categoryId}>
                    <Text style={{marginTop: 5, fontSize: 18}}>
                      {this.getCategoryById(categoryId)}
                    </Text>
                    <Text style={{marginTop: 5, fontSize: 18, color: 'black'}}>
                      {' '}
                      ..{' '}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 35,
              left: 115,
            }}>
            {[1].map(priceRating => {
              return (
                <Text
                  key={priceRating}
                  style={{
                    marginTop: 5,
                    fontSize: 18,
                    color:
                      priceRating <= item.priceRating ? 'black' : 'darkgrey',
                  }}>
                  ${item.priceRating}
                </Text>
              );
            })}
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={this.state.restaurants}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return 'sth-' + item.id;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItem: 'center',
          paddingHorizontal: 20,
        }}
      />
    );
  };
}
