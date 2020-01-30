import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../config';
import './Shows.css';

const Shows = () => {

  const [shows, setShows] = useState([{
    city:'',
    date:''
  }]);

  const [filteredShow, setFilteredShow] = useState([{
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

  console.log(shows)
 

  const handleFilterCity = (string) => {
    const filterCity = shows.filter((show) => show.city.includes(string));
    setFilteredShow(filterCity);
  };

  const handleFilterDate = (string) => {
    const filterDate = shows.filter((show) => show.date.includes(string));
    setFilteredShow(filterDate);
  };

  console.log(filteredShow)


  const changeDate = (dateToChange) => {
    let date = new Date(dateToChange);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  return(
    <>
      <h2>Shows</h2>
      <select name="city" id="city-selected" onChange={(event) => handleFilterCity(event.target.value)}>
        <option value="">Choose a city</option>
        {shows.map((show,index) => {
          return(
            <option value={show.city}>{show.city}</option>
          )
        })
        }
      </select>
      <select name="date" id="date-selected" onChange={(event) => handleFilterDate(event.target.value)}>
        <option value="">Choose a date</option>
        {shows.map((show,index) => {
          return(
            <option value={changeDate(show.date)}>{changeDate(show.date)}</option>
          )
        })
        }
      </select>
      {filteredShow.city === null
      ? (
      <div className="list_show">
      {shows.map((show, index) => {
        return(
          <div key={index}>
            <ul className="shows">
              <li>
                <h4>{show.city}</h4>
                <p>{changeDate(show.date)}</p>
              </li>
            </ul>
          </div>
        );
      })
      }
      </div> ) : 
      (
        <div className="list_show">
        {filteredShow.map((show, index) => {
          return(
            <div key={index}>
              <ul className="shows">
                <li>
                  <h4>{show.city}</h4>
                  <p>{changeDate(show.date)}</p>
                </li>
              </ul>
            </div>
          );
        })
        }
        </div>
      )
      }
    </>
  );
  };

export default Shows;
