import React, { useState, useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import Modal_MoreInfo from './Modal_MoreInfo';

import './components.css';

function ResultsListItem(props) {
  const [ filmInfo, setFilmInfo ] = useState({});
  const filmRef = useRef();

  const dataToServer = {
    api_id: props.imdbID,
    title: props.title,
    image: props.image,
    year: props.year
  }

  const detailResults = {
    api_id: props.imdbID,
    title: props.title,
    image: props.image,
    genre: {},
    year: props.year,
    language: '',
    country: '',
    director: '',
    actors: props.actors
  };

  filmRef.filmInfo = props;

  const addToListHandler = (e) => {
    axios.post('http://localhost:3000/film', dataToServer)
    .then(response => {
      console.log(response.data);
      props.updateMovies()
    })
    // .then (response => props.updateMovies())
    .catch(function (error){
      console.log(error)
    })
  }

  return (
    <>
      <div className='ResultsBox'>
        <img className="ResultsImage" src={props.image}  />
        <div className='MovieListBasics'>
          <h3>{props.title}</h3>
          <h6>{props.year}</h6>
          <Button className="ResultsListButton" onClick={addToListHandler}>Add to list</Button>
        </div>
        {/* <p> {props.title} </p>
        <p> {props.year} </p>

        <Button className="ResultsListButton" onClick={addToListHandler}>Add to list</Button> */}

      </div>
    </>
  )
}

export default ResultsListItem;
