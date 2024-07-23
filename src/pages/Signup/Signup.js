import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Signup() {
  return (
    <>
      <Container fluid className="mt-4">
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={4}>
            <Image
              src="/logo.png"
              rounded
              style={{ width: "-webkit-fill-available", padding: "auto" }}
            />
          </Col>
          <Col xs={12} md={8} style={{ maxWidth: "600px" }}>
            <Form className="p-5">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicphone">
            <Form.Label>Phone Number</Form.Label>
              <div className=" d-flex">
                <Form.Control type="phone" placeholder="Enter Phone Number" />
                <Button className="mx-2 text-nowrap" variant="primary" type="submit">
                    Get OTP
                </Button>
              </div>
                <Form.Text className="text-muted">
                  We'll never share your Phone Number with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree to T&C" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
