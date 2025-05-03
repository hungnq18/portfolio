import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
function Profile() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6} className="text-center">
                        <div className="text">            
                            <h1>Education</h1>
                            <p>Bachelor's Degree in Software Engineering</p>
                        </div>
                        <div className="text">
                            <h1>Experience</h1>
                            <p>2 years of experience in full-stack development</p>
                            <p>2 year of experience in mobile development</p>
                        </div>
                    </Col>
                    <Col md={6} className="text-center">
                        <div className="text">
                            <h1>Developer</h1>
                            <p>JavaScript, React, Node.js, React Native</p>
                            <p>HTML, CSS, Bootstrap, Tailwind CSS</p>
                        </div>
                        <div className="text">
                            <h1>Maintainance</h1>
                            <p>Coding, Traveling, Reading</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
