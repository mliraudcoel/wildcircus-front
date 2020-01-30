import React, {useEffect, useState } from 'react';
import {apiEndPoint} from '../../config';
import axios from 'axios';

const Prices = () => {

  const [prices, setPrices] = useState([{
    name:'',
    adult_price:'',
    child_price:'',
    group_price:'',
    school_price:''
  }]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/prices`)
    .then(response => {
      console.log(response.data);
      setPrices(response.data);
    })
  },[]);

  return(
    <>
    <h2>Prices</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Adults</th>
          <th>Children under 12</th>
          <th>Groups (more than 10 people)</th>
          <th>Schools</th>
        </tr>
      </thead>
      {prices.map((price, index) => {
        return (

          <tbody>
            <tr>
              <td>{price.name}</td>
              <td>{price.adult_price}€</td>
              <td>{price.child_price}€</td>
              <td>{price.group_price}€</td>
              <td>{price.school_price}€</td>
            </tr>
          </tbody>
        )
      })}
    </table>
    </>
  );
};

export default Prices;

