import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../config';
import './Performances.css';

const Performances = () => {

  const [performances, setPerformances] = useState([{
    title:'',
    description:''
  }]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/performances`)
    .then(response => {
      console.log(response.data);
      setPerformances(response.data);
    })
  },[]);

  return(
    <>
      <h2>Performances</h2>
      <div className="list">
      {performances.map((performance, index) => {
        return(
          <div key={index}>
            <ul className="list">
              <li className="type_performance">
                <h3>{performance.title}</h3>
                <p>{performance.description}</p>
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

export default Performances;