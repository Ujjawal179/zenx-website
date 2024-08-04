import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import GoogleButton from 'react-google-button'

function Login() {
    return ( 
        <>
        <Container fluid className='mt-4' style={{minHeight:"85vh"}}>
            <Row className=" justify-content-center align-items-center">
                <Col  xs={8} md={4}>
                <Image src="/logo.png" rounded style={{"width":"-webkit-fill-available", padding:"auto"}}/>
                </Col>
                <Col xs={12} md={8} style={{maxWidth:"600px"}} className=" justify-content-center align-items-center">
                    <Form className='p-4 pt-5 '>
                        <h1 className='m-0'>Hello,</h1>
                        <h1 className='highlighted head m-0'>Welcome!</h1>
                        <p>Do not have Account, Sign Up!</p>
                        <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                            <GoogleButton
                            style={{ margin: "auto", marginTop: "1rem"} }
                            onClick={() => { console.log('Google button clicked') }}
                            />
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
     );
}

export default Login;