import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ListGroup className="rounded-0">
        <ListGroup.Item action >
          <Link to={"dashboard"}>Dashboard</Link >
        </ListGroup.Item>
        <ListGroup.Item action >
          <Link to={"profile"}>Profile</Link>
        </ListGroup.Item>
        <ListGroup.Item action href="#services">
          Services
        </ListGroup.Item>
        <ListGroup.Item action href="#contact">
          Contact
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
