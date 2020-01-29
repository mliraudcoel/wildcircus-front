import React, {useEffect, useState } from 'react';
import {apiEndPoint} from '../../config';
import axios from 'axios';

const Prices = () => {

  const [prices, setPrices] = useState([{
    name:'',
    photo:''
  }]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/prices`)
    .then(response => {
      console.log(response.data);
      setPrices(response.data);
    })
  },[]);

  return(
    <h2>Prices</h2>
  );
};

export default Prices;