import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

function DashBoard() {
  const navigate = useNavigate();
  const HandleCreateQueue = ()=>{
      navigate("/createqueue");
  }


  return (
    <div> 
      <div>DashBoard</div>
      <Button variant="primary" size="lg" onClick={HandleCreateQueue}>
          Create Queue
      </Button>


    </div>
  )
}

export default DashBoard