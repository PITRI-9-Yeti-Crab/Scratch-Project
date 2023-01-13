import React, { useState } from 'react';
import BasicResult from './BasicResult'

function ResultsList(props) {
  // const [ actorsArray, setActorsArray ] = useState([])




  // function actorGetter (arr) {
  //   const actorsArray = [];
  //   for (const entry of arr) {
  //     actorsArray.push(entry.name)
  //   }
  //   return actorsArray;
  // }

  return (
  <>
    {props.results.map(basicFilmData => <BasicResult
      title = {basicFilmData.title}
      year = {basicFilmData.year}
      image={basicFilmData.image.url}
      imdbID={basicFilmData.id.slice(7)}
      actors = {basicFilmData.principals}>
    </BasicResult>)}
  </>
  )
}

export default ResultsList;
