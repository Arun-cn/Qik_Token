import React from "react";
import Card from "react-bootstrap/Card";

function queueCard({ title }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default queueCard;
