import React from 'react';


function ResultsList({ title, year, image }) {


  return (
  <>
  {/* <h2>Ayyyy Results List Over Here</h2> */}

  <p> {title} </p>
  <p> {year} </p>
  <img src={image} width="200px" height="200px" />
  </>
  )
}

export default ResultsList;
