import Row from "react-bootstrap/Row"
import React from 'react';
import Nir from "./Nir";

const NirContainer = ({song}) => {





  return (
    
    <div className="nir-container">
      <Row className="row-cols-1 row-cols-lg-5 row-cols-md-3 mx-auto mt-2 mb-10 dark-mode">
        {song.map((song) => {
          return <Nir key={song._id} name={song.name} singer={song.singer} url={song.url} image={song.image} />
        })}
      </Row>
    </div>
  )
}

export default NirContainer;
