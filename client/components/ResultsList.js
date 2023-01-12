import React from 'react';
import BasicResult from './BasicResult'

function ResultsList(props) {

  return (
  <>
    {props.results.map(basicFilmData => <BasicResult
      title = {basicFilmData.title}
      year = {basicFilmData.year}
      image={basicFilmData.image.url}>
    </BasicResult>)}
  </>
  )
}

export default ResultsList;
