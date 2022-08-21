import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TheNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">VRBlog</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TheNavbar;