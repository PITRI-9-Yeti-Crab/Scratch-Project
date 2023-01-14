import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from './Header';
import UserLogin from './UserLogin';
import ModalDemo from './ModalDemo';
import ResultsList from './ResultsList';
import MediaList from './MediaList';
import Modal_APISearch from './Modal_APISearch';

import './components.css'

function Dash() {

    const [ textInput, setTextInput ] = useState("");
    const [ apiResults, setApiResults ] = useState([]);

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

            const filteredResults = results.filter(movie => movie.title && movie.image)

            // expirimental
            const trimmedResults = [];

            for (let i=0; i<filteredResults.length; i++) {
                trimmedResults.push({});
                trimmedResults[i] = {
                    title: filteredResults[i].title,
                    api_id: filteredResults[i].id.slice(7),
                    year: filteredResults[i].year,
                    image: filteredResults[i].image.url
                }
            }
            console.log('trimmedResults:', trimmedResults)
            // expirimental
            // must use setState to, well, set the state
            setApiResults(filteredResults)

            console.log('filteredResults:',filteredResults);


        }).catch(function (error) {
            console.error(error);
        });

        setTextInput("");
        // setApiResults([]);
    }

  return (
    <>

    <Header />

    <h1>DASHBOARD</h1>

    <Modal_APISearch />

    <hr />

    {/* <Form  >
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
         value={textInput} onChange={textInputHandler} onSubmit={submitHandler}
        />
        <Button variant="primary"
            onClick={submitHandler}
        >
            Submit
        </Button>
    </Form> */}


    <div>

        <MediaList />

    </div>

    </>
  )
}

export default Dash;
