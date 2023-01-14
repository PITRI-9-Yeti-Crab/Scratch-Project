import React, { useState, useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal_MoreInfo from './Modal_MoreInfo';

import './components.css';

function MediaListItem(props) {

    // display individual Media List items

    const moreInfoHandler = (e) => {
        const genreOptions = {
          method: 'GET',
          url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
          params: {tconst: props.imdbID, currentCountry: 'US'},
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_FILM_API_KEY,
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          }
        };
    }


  return (
    <>

     <div className="mediaListItem">
        <img className="ResultsImage" src={props.movie.image}></img>
        <div className='MovieListBasics'>
          <h2>{props.movie.title}</h2>
          <h6>{props.movie.year}</h6>
          <Modal_MoreInfo onClick={moreInfoHandler}></Modal_MoreInfo>
        </div>
        <div>

        </div>
      </div>

    </>
  )
}

export default MediaListItem;
