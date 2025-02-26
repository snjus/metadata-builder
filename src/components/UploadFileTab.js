import React, { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
//import 'ag-grid-community/styles/ag-theme-alpine.css';
import "ag-grid-community/styles/ag-theme-quartz.css";
import FileUploader from './FileUploader';
import DetailsModal from './DetailsModal';
import { uploadFiles, downloadResults } from '../api/mockApi';

const UploadFileTab = ({ prompt }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [costInfo, setCostInfo] = useState('');
  const [totalTokens, setTotalTokens] = useState('');

  const handleFileUpload = async (files) => {
    try {
      const response = await uploadFiles(files);
      setUploadedFiles(response);
      setError('');
    } catch (err) {
      setError('Error uploading files. Please try again.');
    }
  };

  const handleDownload = async () => {
    try {
      await downloadResults();
    } catch (err) {
      setError('Error downloading results. Please try again.');
    }
  };

  const columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Document Type', field: 'documentType' },
    { headerName: 'Discipline', field: 'discipline' },
    {
      headerName: 'Actions',
      cellRenderer: (params) => (
        <Button onClick={() => {
          setSelectedFile(params.data);
          setShowModal(true);
        }}>
          Details
        </Button>
      )
    }
  ];

  return (
    <Container>
      {error && <Alert variant="danger">{error}</Alert>}   
        <FileUploader onUpload={handleFileUpload} />    
          <div className="ag-theme-quartz-dark" style={{ height: 400, width: '100%' }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={uploadedFiles}
            />
          </div>
          <textarea
            value={costInfo}
            onChange={(e) => setCostInfo(e.target.value)}
            placeholder="Cost Info"
            rows={2}
            className="mt-3 w-100"
          />
          <textarea
            value={totalTokens}
            onChange={(e) => setTotalTokens(e.target.value)}
            placeholder="Total Tokens"
            rows={2}
            className="mt-3 w-100"
          />
          <Button onClick={handleDownload} className="btn-sm mt-3 mb-3"  >Download Results</Button>      
       <DetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        file={selectedFile}
      />
    </Container>
  );
};

export default UploadFileTab;