import { Form, Button, Row, Col } from 'react-bootstrap';

export const ProfileForm = () => {
  return (
    <div className="m-4">
            <h4 className="mb-4 d-none d-md-block">My Profile</h4>
            <Form >
              <Row className="mb-4">
                <Col><Form.Control placeholder="First name" /></Col>
                <Col><Form.Control placeholder="Last name" /></Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Phone number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <div className="text-end"> <Button variant="dark" className="px-4 py-2 mt-3">
                        ADD NEW ADDRESS </Button></div>
            </Form>
          </div>
  );
};
