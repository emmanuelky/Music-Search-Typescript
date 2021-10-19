import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const MyNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="rounded-lg">
                <Container>
                    <Navbar.Brand href="/">Music Search</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            {/* <Nav.Link href="/">Link</Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar
