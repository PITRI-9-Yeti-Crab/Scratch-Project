import React, { useRef } from 'react';
import './components.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function BasicResult(props) {
  const filmRef = useRef();

  filmRef.filmInfo = props;

  const filmSubmitHandler = (e) => {
    console.log(filmRef.filmInfo)
  }

  // const postMainListOptions = {
  //   method: 'POST',
  //   url: 'http://localhost:3000/film'
  // }

  // const addFilmToMainList = () => {
  //   axios.post('http://localhost:3000/film', {
      
  //   })

  // }
  return (
    <>
      <div className='ResultBox'>
        <img src={props.image} width="200px" height="200px" />
        <p> {props.title} </p>
        <p> {props.year} </p>
        <Button onClick={filmSubmitHandler}>Add to list</Button>
      </div>
    </>
  )
}

export default BasicResult;