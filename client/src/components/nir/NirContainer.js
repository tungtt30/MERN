import Row from "react-bootstrap/Row"
import React, { memo } from 'react';
import Nir from "./Nir";
import Spinner from "react-bootstrap/esm/Spinner";

const NirContainer = ({ song }) => {


  let body = null
  if (song.length === 1) {
    body = (
      <div className="spinner-container" >
        <Spinner animation='grow' variant='danger' />
      </div>
    )
  } else {
    body = (<div className="nir-container">
      <Row className="row-cols-1 row-cols-lg-5 row-cols-md-3 mx-auto mt-2 mb-10 dark-mode" style={
        {
          padding: '15px 0'
        }
      }>
        {song.map((song) => {
          return <Nir key={song.url} name={song.name} singer={song.singer} url={song.url} image={song.image} />
        })}
      </Row>
    </div>)
  }

  // console.log('nir container re render')




  return (
    body
  )
}

export default memo(NirContainer) ;
