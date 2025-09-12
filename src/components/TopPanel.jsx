import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import "./../App.css"
import Nav from "react-bootstrap/Nav"


function topPanel() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark'>
      <Container>
        <Navbar.Brand className='justify-content-start'>Exploration des condamnations des établissements alimentaires et leurs critiques Google </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Form>
              <div className="custom-admin-switch">
              <Form.Check
                type='switch'
                id='admin-switch'
                label= 'Visualiser les limites administratives'
              />
              </div>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default topPanel;