import React, { useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "@styles/header/_blogheader.scss";
import { useAuthUser } from "../../../context/AuthContext";

const BlogHeader = ({ className }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { logout } = useAuthUser();

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };
  return (
    <header
      className={`blog-header ${isSticky ? "sticky shadow" : ""} ${className}`}
    >
      <Navbar expand="md" className="py-3 custom-navbar" bg="transparent">
        <Container>
          <Navbar.Brand as={Link} to={"/blogs"}>
            <span style={{ color: "#ff3b1d" }}>Story</span> Verse
          </Navbar.Brand>

          <Dropdown align={"end"}>
            <Dropdown.Toggle id="dropdown-basic" as={"button"}>
              <i class="fa-solid fa-user"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item to="/myprofile" as={Link}>
                My Profile
              </Dropdown.Item>
              <Dropdown.Item to="/blogs/my-blogs" as={Link}>
                My Blogs
              </Dropdown.Item>
              <Dropdown.Item
                as={"button"}
                className="text-danger"
                onClick={handleLogout}
              >
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
