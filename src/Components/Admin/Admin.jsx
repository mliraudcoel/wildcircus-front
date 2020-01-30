import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {apiEndPoint} from '../../config';

const Admin = () => {

  const [form, setForm] = useState({
    city:'',
    date:''
  });

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

  const addShow = (event) => {
    event.preventDefault();
     axios.post(`${apiEndPoint}/shows`, {
       city: form.city,
       date: form.date,
     });
     console.log('ok')
    };

  const changeDate = (dateToChange) => {
    let date = new Date(dateToChange);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  return(
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">City</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setForm({...form, city: event.target.value})} value={form.city}/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="2020-04-12 20:30:00" onChange={(event) => setForm({...form, date: event.target.value})} value={form.date}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={addShow}>Submit</button>
      </form>
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
    </>
  )
}

export default Admin;