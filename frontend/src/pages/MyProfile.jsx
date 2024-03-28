import BlogHeader from "@components/blogs/BlogHeader/BlogHeader";
import React, { useState } from "react";

import "@styles/myprofile/_myprofile.scss";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthUser } from "../context/AuthContext";
import toast from "react-hot-toast";
import { updateUserService } from "../services/authService";

const MyProfile = () => {
  const { user, updateUser } = useAuthUser();

  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = async e => {
    e.preventDefault();
    const name = userData.name.trim();
    if (user.name !== name) {
      toast.promise(updateUserService(name), {
        loading: "Updating Profile...",
        success: user => {
          setIsEdit(false);
          updateUser(user);
          return "Profile updated successfully";
        },
        error: "Cannot update profile , Try again",
      });
    }
  };

  return (
    <>
      <BlogHeader className={"shadow"} />
      <section className="my-profile ">
        <div className="form-wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} lg={6}>
                <div className="form-container shadow p-4 rounded">
                  <h3 className="mb-4">Profile</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={userData.name}
                        onChange={e =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                        disabled={!isEdit}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={userData.email}
                        disabled
                      />
                    </Form.Group>

                    {isEdit && (
                      <Button
                        variant="success"
                        type="submit"
                        onClick={handleUpdate}
                        className="w-100 mt-4"
                      >
                        Update Profile
                      </Button>
                    )}

                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => setIsEdit(!isEdit)}
                      className="button-primary mt-2"
                    >
                      {isEdit ? "Cancel" : "Edit"}
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
