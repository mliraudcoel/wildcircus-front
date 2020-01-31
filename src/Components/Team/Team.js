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
    <h2 id="team">Our team</h2> 
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
      <div className="pictures">
      <img src={`${process.env.PUBLIC_URL}/assets/images/clowns.jpg`} alt="clowns" className="team_picture"/>
      <img src={`${process.env.PUBLIC_URL}/assets/images/magicians.jpg`} alt="magicians" className="team_picture" />
      <img src={`${process.env.PUBLIC_URL}/assets/images/tamers.jpg`} alt="tamers" className="team_picture" />
      </div>
    </>
  );
};

export default Team;
