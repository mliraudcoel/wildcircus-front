import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../config';
import './Shows.css';

const Shows = () => {

  const [shows, setShows] = useState([{
    city:'',
    date:''
  }]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/shows`)
    .then(response => {
      console.log(response.data);
      // setShows(response.data);
      setShows(response.data);
    })
  },[]);

  console.log(shows[0].date);

  const changeDate = (dateToChange) => {
    let date = new Date(dateToChange);
    console.log(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    console.log(date.toLocaleDateString('fr-FR', options));
    return date.toLocaleDateString('fr-FR', options);
  };
  
  return(
    <>
      <h2>Shows</h2>
      <select>
      </select>
      <div className="list">
      {shows.map((show, index) => {
        return(
          <div key={index}>
            <ul className="shows">
              <li>
                <h3>{show.city}</h3>
                <p>{changeDate(show.date)}</p>
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
