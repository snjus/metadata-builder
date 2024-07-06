import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Spinner } from 'react-bootstrap';

const FileUploader = ({ onUpload }) => {
  const [uploading, setUploading] = React.useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    setUploading(true);
    try {
      await onUpload(acceptedFiles);
    } finally {
      setUploading(false);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {uploading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  marginTop : '2em',
  marginBottom: '2em'
};

export default FileUploader;