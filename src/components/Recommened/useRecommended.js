import React, {Component} from 'react';
import axios from 'axios';
const url = 'https://training.softech.cloud/api/products/recommended';

export default () => {
  const [recommended, setRecommended] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(0);
  const onRefresh = () => {
    setRefresh(refresh + 1);
  };
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(response => {
        recommended: response.data;
        setLoading(false);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [refresh]);
  return [loading, onRefresh, recommended];
};
