import React from 'react';
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap';

const FormClima = () => {
    return (
    <Form>
            <Row className="p-4">
        <Col xs={3}>
          <FormLabel>Ubicación: </FormLabel>
        </Col>
        <Col xs={7}>
        <Form.Control type="text" placeholder="Tucumán, Argentina" />
        </Col>
        <Col xs={2}>
        <Button>Consultar</Button>

        </Col>
      </Row>
    </Form>
    );
};

export default FormClima;