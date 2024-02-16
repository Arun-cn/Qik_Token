import React from 'react'
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/esm/CardFooter';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Row,Col, Container, CardBody } from 'react-bootstrap';

function TokenCard({name,number,owner}) {
  return (
    

          <Card style={{width: "20rem"}}>
            <CardHeader>
              {name}
            </CardHeader>
            <CardBody>
            <span className="fs-5">
             Token Number : {number}
            </span>
            </CardBody>
            <CardFooter>
              {owner}

            </CardFooter>


          </Card>
    
  )
}

export default TokenCard