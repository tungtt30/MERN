import React, { useContext, memo } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { NirContext } from "./NirLayout";
import Spinner from "react-bootstrap/esm/Spinner";

const Nir = (props) => {
  const { setSongIndex, setCurrentSong, playSong, currentSong, isPlaying } =
    useContext(NirContext);

  let btnSpinner = null;
  let btnText = "Play";

  const handleClick = async () => {
    await setCurrentSong(props);
    await setSongIndex(props.index);
    await playSong();
  };

  if (currentSong.url === props.url && isPlaying) {
    btnSpinner = (
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
    btnText = " Playing ";
  } else if (currentSong.url === props.url && !isPlaying) {
    btnSpinner = (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
    btnText = "";
  }
  

  return (
    <>
      <Col>
        <Card
          className="mb-5 cardClass"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <Card.Img variant="top" className="card-image" src={props.image} />
          <Card.Body>
            <Card.Title>
              {props.name} <span style={{ color: "red" }}>{btnSpinner}</span>
            </Card.Title>
            <Card.Text>{props.singer}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default memo(Nir);
