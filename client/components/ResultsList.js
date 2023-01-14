import React, { useState } from 'react';
import ResultsListItem from './ResultsListItem'

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

  <h3>Results List (inside component)</h3>

    {props.results.map(basicFilmData => <ResultsListItem
      title = {basicFilmData.title}
      year = {basicFilmData.year}
      image={basicFilmData.image.url}
      imdbID={basicFilmData.id.slice(7)}
      actors = {basicFilmData.principals}>
    </ResultsListItem>)}
  </>
  )
}

export default ResultsList;
