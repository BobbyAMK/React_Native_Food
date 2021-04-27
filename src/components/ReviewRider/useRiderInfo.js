import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';

export default () => {
  const [loading, setLoading] = React.useState(true);
  const [rider, setRider] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://training.softech.cloud/api/riders/6079678f2acd793445f939cd')
      .then(res => {
        setRider(res.data.rider);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return [loading, rider];
};
