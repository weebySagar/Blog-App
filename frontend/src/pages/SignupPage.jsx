import Header from "@components/Header/Header";
import SignupForm from "@components/forms/SignupForm";
import InnerWrapper from "@components/ui/InnerWrapper";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SignupPage = () => {
  return (
    <>
      <Header />
      <section className="login">
        <InnerWrapper>
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xxl={5}>
                <div className="form-container shadow p-4 rounded">
                  <SignupForm />
                </div>
              </Col>
            </Row>
          </Container>
        </InnerWrapper>
      </section>
    </>
  );
};

export default SignupPage;
