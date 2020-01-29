import React, {useEffect, useState } from 'react';
import { apiEndPoint} from '../../config';
import axios from 'axios';
import './Team.css';

const Team = () => {

  const [teams, setTeams] = useState([{
    name:'',
    photo:''
  }]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/teams`)
    .then(response => {
      console.log(response.data);
      setTeams(response.data);
    })
  },[]);

  return(
    <>
    <h2>Our team</h2> 
      <div className="teams">
      {teams.map((team, index) => {
        return(
          <div key={index}>
            <h3>{team.name}</h3>
          </div>
        );
      })
      }
      </div>
    </>
  );
};

export default Team;
