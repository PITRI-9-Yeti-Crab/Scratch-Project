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
            'X-RapidAPI-Key': '254a2ed010msh9089e065fc76542p1ab1cfjsn91b42fac04d9',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          }
        };
    }


  return (
    <>
    <div className="mediaListItem">
        <p>An Individual Media List Item</p>

        <Modal_MoreInfo onClick={moreInfoHandler}></Modal_MoreInfo>
    </div>
    </>
  )
}

export default MediaListItem;
