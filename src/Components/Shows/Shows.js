import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../config';

const Shows = () => {

  const [shows, setShows] = useState([{
    city:'',
    date:''
  }]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/shows`)
    .then(response => {
      console.log(response.data);
      setShows(response.data);
    })
  },[]);

  return(
    <>
      <h2>Shows</h2>
      <div className="list">
      {shows.map((show, index) => {
        return(
          <div key={index}>
            <ul>
              <li>
                <h3>{show.city}</h3>
                <p>{show.date}</p>
              </li>
            </ul>
          </div>
        );
      })
      }
      </div>
    </>
  );
  };

export default Shows;
