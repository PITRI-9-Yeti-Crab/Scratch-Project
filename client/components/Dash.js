import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Login from './Login';
import ModalDemo from './ModalDemo';
import ResultsList from './ResultsList';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import './components.css'

function Dash() {

    const [ textInput, setTextInput ] = useState("");
    const [ apiResults, setApiResults ] = useState([])

    // text handler - catches what's typed
    const textInputHandler = (e) => {
        setTextInput(e.target.value);
        console.log(e.target.value)
    }

    // submit handler - currently returns 20 results
    const submitHandler = (e) => {
        setTextInput("");

        const options = {
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/title/find',
            params: {q: textInput },
            headers: {
              'X-RapidAPI-Key': '254a2ed010msh9089e065fc76542p1ab1cfjsn91b42fac04d9',
              'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };


        axios.request(options).then(function (response) {
            const results = response.data.results;
            console.log(results);

            results.forEach(el => {
                if(el.title) apiResults.push(el.title);

            });
            console.log('apiResults:',apiResults);
            // setApiResults([])

        }).catch(function (error) {
            console.error(error);
        });

        // useEffect to return.... somethign

        
        setTextInput("");
    }


    // show list of search results
        // add search results to state
        // add state to individual components
        // populate list with state

    // allow user to select
        // view details
        // add to list


  return (
    <>

    <Header />

    <h1>DASHBOARD</h1>

    <ModalDemo />

    <hr />

    <Form  >
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
         value={textInput} onChange={textInputHandler}
        />
        <Button variant="primary" onClick={submitHandler}>
            Submit
        </Button>
    </Form>

    <div>

    {/* {apiResults.map( ({title}) => {

        return (
            <ResultsList
                title={ title }
            />
            )
        }
    )} */}
    Hello!
    {apiResults}

    </div>

    </>
  )
}

export default Dash;
