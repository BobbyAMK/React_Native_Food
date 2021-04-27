import React from 'react';
import axios from 'axios';
const url = 'https://training.softech.cloud/api/categories';

export default () => {
  const [categories, setCategories] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const onRefresh = () => {
    setRefresh(refresh + 1);
  };
  React.useEffect(() => {
    axios
      .get(url)
      .then(result => {
        setCategories(result.data.categories);
        setLoading(false);
        console.log('Done');
      })
      .catch(error => {
        console.log(error);
      });
  }, [refresh]);
  return [onRefresh, categories];
};
