import React from "react";
import { Navigate, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./Sider.css";

const Sidebar = () => {
  return (
    <div className="sidebar fullhight bg-blue">
      <ListGroup className="rounded-0 gap-1 h-100">
        <ListGroup.Item as={Link} to="/dashboard" action>
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/profile" action>
          Profile
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/tokens" action>
          Tokens
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/queues" action>
          Queues
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/display" action>
          Display
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
