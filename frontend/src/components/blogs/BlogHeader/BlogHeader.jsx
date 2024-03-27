import React, { useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "@styles/header/_blogheader.scss";

const BlogHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`blog-header ${isSticky ? "sticky shadow" : ""}`}>
      <Navbar expand="md" className="py-3 custom-navbar" bg="transparent">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <span style={{ color: "#ff3b1d" }}>Story</span> Verse
          </Navbar.Brand>

          <Dropdown align={"end"}>
            <Dropdown.Toggle id="dropdown-basic" as={"button"}>
              <i class="fa-solid fa-user"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
              <Dropdown.Item href="/my-blogs">My Blogs</Dropdown.Item>
              <Dropdown.Item as={"button"} className="text-danger">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  );
};

export default BlogHeader;
