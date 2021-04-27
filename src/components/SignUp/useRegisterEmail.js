import React from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
const url = 'https://training.softech.cloud/api/users/register';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const signUp = (email, password, fullname, saveMe) => {
    setLoading(true);
    axios
      .post(url, {email, password, fullname})
      .then(response => {
        if (response.data.ok) {
          console.log(response.data);
          console.log('Done');
          setSuccess(true);
          navigation.navigate();
          // save to storage
          // code here ...
        } else {
          console.log(response.data);
          console.log('False');
          setSuccess(false);
          console.log(success);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setSuccess(false);
      });
  };
  return [loading, success, signUp];
};
