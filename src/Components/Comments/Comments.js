import React, { useState, useEffect } from 'react';
import { apiEndPoint } from '../../config';
import axios from 'axios';

const Comments = () => {

  const [form, setForm] = useState({
    pseudo:'',
    comment:''
  });

  const [comment, setComment] = useState({
    pseudo:'',
    comment:''
  });

useEffect(() => {
  axios.get(`${apiEndPoint}/comments`)
  .then(response => {
    console.log(response.data);
    setComment(response.data);
  })
},[]);


  const addComment = (event) => {
    event.preventDefault();
     axios.post(`${apiEndPoint}/comments`, {
       pseudo: form.pseudo,
       comment: form.comment,
     });
     console.log('ok')
    };

  return(
    <>
      <h2>Comments</h2>
      <form>
      <label htmlFor="h4 mb-4"> Votre pseudo </label>
      <div className="container-input">
        <input type="text" id="defaultContactFormName" onChange={(event) => setForm({...form, pseudo: event.target.value})} value={form.pseudo} />
      </div>
        <label htmlFor="h4 mb-4"> Votre commentaire </label>
      <div className="container-input">
        <input type="text" className="input-comment" id="defaultContactFormName" onChange={(event) => setForm({...form, comment: event.target.value})} value={form.comment} />
      </div>
      <div className="container-input">
        <button onClick={addComment}>Envoyer</button>
      </div>
    </form>
  </>
  );
};

export default Comments;