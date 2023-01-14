import React, { useState, useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal_MoreInfo from './Modal_MoreInfo';

import './components.css';

function MediaListItem(props) {

    // display individual Media List items

    const detailResults = {}

  
    const moreInfoHandler = (e) => {
      const genreOptions = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
        params: {tconst: props.movie.api_id, currentCountry: 'US'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_FILM_API_KEY,
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
  
      axios.request(genreOptions).then(function (response) {
        console.log(response.data);
        detailResults.genre = response.data.genres;
        console.log('detailResultsWithGenres:', detailResults)
  
      }).catch(function (error) {
        console.error(error);
      });
  
      const directorOptions = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-full-credits',
        params: {tconst: props.movie.api_id},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_FILM_API_KEY,
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
  
      axios.request(directorOptions).then(function (response) {
        console.log(response.data);
        detailResults.director = response.data.crew.director[0].name;
        console.log('detailResultsWithDirector:', detailResults)
      }).catch(function (error) {
        console.error(error);
      });
    }


  return (
    <>

     <div className="mediaListItem">
        <img className="ResultsImage" src={props.movie.image}></img>
        <div className='MovieListBasics'>
          <h2>{props.movie.title}</h2>
          <h6>{props.movie.year}</h6>
          <Modal_MoreInfo getMoreInfo={moreInfoHandler} moreDetails={detailResults}></Modal_MoreInfo>
        </div>
        <div>

        </div>
      </div>

    </>
  )
}

export default MediaListItem;
