import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import ResultsList from './ResultsList';


function Modal_APISearch() {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            'X-RapidAPI-Key': process.env.REACT_APP_FILM_API_KEY,
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
      <Button variant="primary" onClick={handleShow}>
        Claw New Movies
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search API</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <h2>Search Results, Modal Body</h2>

        <Form  >
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
         value={textInput} onChange={textInputHandler} onSubmit={submitHandler}
        />
        <Button variant="primary"
            onClick={submitHandler}
        >
            Submit
        </Button>
    </Form>

    <div>

    <ResultsList results={apiResults}/>

    </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default Modal_APISearch;
