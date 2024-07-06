import React, { useState, useEffect } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import Header from './components/Header';
import UploadFileTab from './components/UploadFileTab';
import DeveloperOptionsTab from './components/DeveloperOptionsTab';
import { getPrompt } from './api/mockApi';

const App = () => {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const fetchedPrompt = await getPrompt();
        setPrompt(fetchedPrompt);
      } catch (error) {
        console.error('Error fetching prompt:', error);
      }
    };

    fetchPrompt();
  }, []);

  return (
    <Container fluid>
      <Header />
      <Tab.Container data-bs-theam="dark" defaultActiveKey="uploadFile">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="uploadFile">Upload File</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="developerOptions">Developer Options</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="uploadFile">
            <UploadFileTab prompt={prompt} />
          </Tab.Pane>
          <Tab.Pane eventKey="developerOptions">
            <DeveloperOptionsTab prompt={prompt} setPrompt={setPrompt} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default App;