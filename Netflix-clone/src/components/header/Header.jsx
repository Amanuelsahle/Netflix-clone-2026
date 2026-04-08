import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo2.png";
import "./Header.css";
import DropdownDivider from "react-bootstrap/esm/DropdownDivider";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      style={{ backgroundColor: "#141414" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="col-1">
          <img src={logo} style={{ width: "100%" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="me-auto border-0 shadow-none fs-6 fw-bold"
          style={{ color: "#ffffff" }}
        >
          Browse <i className="bi bi-caret-down-fill fs-6"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <i id="nav-up-icon" class="bi bi-caret-up-fill"></i>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shows">Shows</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/latest">Latest</Nav.Link>
            <Nav.Link href="/my-list">My List</Nav.Link>
            <Nav.Link href="/languages">Browse by Languages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center gap-3 ms-auto">
          <div className="d-flex align-items-center">
            {searchOpen ? (
              <Form className="d-flex align-items-center">
                <Button variant="outline-success" type="submit">
                  <i className="bi bi-search"></i>
                </Button>
                <Form.Control
                  type="search"
                  placeholder="Title,peoples,genres"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            ) : (
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center border-0 shadow-none"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
              >
                <i className="bi bi-search"></i>
              </Button>
            )}
          </div>
          <Nav.Link href="/kids">Kids</Nav.Link>
          <Nav.Link href="/alert">
            <i className="bi bi-bell"></i>
          </Nav.Link>
          <NavDropdown
            title="User"
            id="navbarScrollingDropdown"
            align="end"
            className="pe-5"
          >
            <NavDropdown.Item href="#action3">User</NavDropdown.Item>
            <NavDropdown.Item href="/kids">Kids</NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              <i className="bi bi-pencil me-1"></i> Manage Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              <i class="bi bi-box-arrow-up-right me-1"></i> Exit Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              <i class="bi bi-emoji-neutral me-1"></i>
              Transfer Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              <i class="bi bi-person me-1"></i>Account
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              <i class="bi bi-question-circle me-1"></i>Help Center
            </NavDropdown.Item>
            <DropdownDivider />
            <NavDropdown.Item href="/sign-out" className="allign-text-center">
              sign out of Netflix
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
