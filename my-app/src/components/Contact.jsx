import React from "react";
import "./contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    return (<div className="cafe">
    <div className="contact-box">
        <h5 className="first"> LET'S MEAT AND TALK</h5>
        <h1 className="sec">Get in Touch with Us</h1>
        <p className="paras mt-3 color-yellow">Whether you have a question,want to make a revervation,or just share your thoughts,We're here to hear from you.fill out the form and we will get back soon.</p>
        {/* <div className="Container">
            <div className="Row">
                <div className="Col-12">
                    <div className="Col-6">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="Col-6">
                        <input type="text" placeholder="Surname" />

                    </div>
                </div>
            </div>
            <div className="Row">
                <div className="Col-12">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="Col-12">
                    <input type="text" placeholder="Message" />
                </div>
            </div>
        </div> */}
        <div className="d-flex justify-content-center align-items-center mt-3 ">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Surname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md="10" controlId="validationCustomUsername border-radius-12px">
          <textarea type="text" placeholder="Message" rows={6} cols={100}/>
        </Form.Group>

      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
    </div>
    </div>
    )

};

export default Contact;
