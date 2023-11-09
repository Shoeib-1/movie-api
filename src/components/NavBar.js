import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../image/logo.jpg";

const NavBar = ({searchMovies}) => {
  
  const onSearch=(word)=>{
    searchMovies(word);
  }
  return (
    <div className="NavBar">
      <Container >
        <Row className=" Nav">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e)=>onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default NavBar;
