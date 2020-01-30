import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {apiEndPoint} from '../../config';
import './Admin.css';

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
     })
     .then(() => {
      console.log('ok')
        // https://developer.mozilla.org/fr/docs/Web/API/Location/reload
      document.location.reload(true);
     });
    };

  const changeDate = (dateToChange) => {
    let date = new Date(dateToChange);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const deleteShow = (idShow) => {
    axios.delete(`${apiEndPoint}/shows/${idShow}`)
      .then(() => {
        console.log('delete')
        // https://developer.mozilla.org/fr/docs/Web/API/Location/reload
        document.location.reload(true);
      });
  };

  return(
    <>
    <h2 className="new_show">Add a new show</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">City</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nantes" onChange={(event) => setForm({...form, city: event.target.value})} value={form.city}/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="2020-04-12 20:30:00" onChange={(event) => setForm({...form, date: event.target.value})} value={form.date}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={addShow}>Submit</button>
      </form>
      <ul className="shows">
      {shows.map((show, index) => {
        return(
          <div key={index}>
              <li>
                <h4>{show.city}</h4>
                <p>{changeDate(show.date)}</p>
              </li>
            <button onClick={() => deleteShow(show.id)}>Delete</button>
          </div>
        );
      })
      }
      </ul>
    </>
  )
}

export default Admin;