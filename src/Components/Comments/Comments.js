import React, { useState, useEffect } from 'react';
import { apiEndPoint } from '../../config';
import axios from 'axios';
import './Comments.css';

const Comments = () => {

  const [form, setForm] = useState({
    pseudo:'',
    comment:''
  });

  const [comments, setComments] = useState([{
    pseudo:'',
    comment:''
  }]);

useEffect(() => {
  axios.get(`${apiEndPoint}/comments`)
  .then(response => {
    console.log(response.data);
    setComments(response.data);
  })
},[]);


  const addComment = (event) => {
    event.preventDefault();
     axios.post(`${apiEndPoint}/comments`, {
       pseudo: form.pseudo,
       comment: form.comment,
     })
     .then(() => {
      console.log('ok')
      document.location.reload(true);
     })
    };

  return(
    <>
      <h2 className="comments" id="comments">Comments</h2>
      {comments.map((comment, index) => {
        return(
          <div>
            <h4>{comment.pseudo}</h4>
            <p>{comment.comment}</p>
          </div>
        );
      })
      }
      <h3>Add your comment</h3>
      <form className="form_comment">
      <label htmlFor="h4 mb-4"> Votre pseudo </label>
      <div className="container-input">
        <input type="text" id="defaultContactFormName" onChange={(event) => setForm({...form, pseudo: event.target.value})} value={form.pseudo} />
      </div>
        <label htmlFor="h4 mb-4"> Votre commentaire </label>
      <div className="container-input">
        <input type="text" className="input-comment" id="defaultContactFormName" onChange={(event) => setForm({...form, comment: event.target.value})} value={form.comment} />
      </div>
      <div className="container-input">
        <button onClick={addComment} className="send_comment">Envoyer</button>
      </div>
      </form>
  </>
  );
};

export default Comments;