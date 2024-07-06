import React from 'react';
import { Container, Form } from 'react-bootstrap';

const DeveloperOptionsTab = ({ prompt, setPrompt }) => {
  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label>Prompt</Form.Label>
        <Form.Control
          as="textarea"
          rows={20}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </Form.Group>
    </Container>
  );
};

export default DeveloperOptionsTab;