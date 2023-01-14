import React, { useState } from 'react';
import MediaListItem from './MediaListItem'

function MediaList(props) {

    // get user's Media List from server


  return (
    <>

      <div>
        {props.movies.map(movie => <MediaListItem
          movie={movie}
        >
        </MediaListItem>)}
      </div>

    </>
  )
}

export default MediaList;
