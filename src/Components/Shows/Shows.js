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

  const changeDate = (dateToChange) => {
    let date = new Date(dateToChange);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  return(
    <>
      <h2>Shows</h2>
      <select name="city" id="city-selected">
        <option value="">Choose a city</option>
        {shows.map((show,index) => {
          return(
            <option value={show.city}>{show.city}</option>
          )
        })
        }
      </select>
      <select name="date" id="date-selected">
        <option value="">Choose a date</option>
        {shows.map((show,index) => {
          return(
            <option value={changeDate(show.date)}>{changeDate(show.date)}</option>
          )
        })
        }
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
