import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css"
import Navbar from "../../layout/DashboradNavBar/DashBoardNavBar";
import Sidebar from "../../layout/Slider/slider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container fluid className='bg-info'>
      <Row >
        <Navbar /> 
      </Row>
      <Row>
        <Col md={2} className="sidemenu ps-0">
          <Sidebar />
        </Col>
        <Col md={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
