import Header from "@components/Header/Header";
import LoginForm from "@components/forms/LoginForm";
import InnerWrapper from "@components/ui/InnerWrapper";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <Header />
      <section className="login">
        <InnerWrapper>
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xxl={5}>
                <div className="form-container shadow p-4 rounded">
                  <LoginForm />
                </div>
              </Col>
            </Row>
          </Container>
        </InnerWrapper>
      </section>
    </>
  );
};

export default LoginPage;
