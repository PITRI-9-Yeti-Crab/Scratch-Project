import React, { useState, useRef } from 'react';
import './components.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FilmInfoModal from './FilmInfoModal';

function BasicResult(props) {
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
      console.log(response.data)
    })
    .catch(function (error){
      console.log(error)
    })
  }

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
      params: {tconst: props.imdbID},
      headers: {
        'X-RapidAPI-Key': '254a2ed010msh9089e065fc76542p1ab1cfjsn91b42fac04d9',
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
      <div className='ResultBox'>
        <img src={props.image} width="200px" height="200px" />
        <p> {props.title} </p>
        <p> {props.year} </p>
        <Button className="ResultListButton" onClick={moreInfoHandler}>More Info</Button>
        <Button className="ResultListButton" onClick={addToListHandler}>Add to list</Button>
        <FilmInfoModal onClick={moreInfoHandler}></FilmInfoModal>
      </div>
    </>
  )
}

export default BasicResult;