import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Spinner } from 'react-bootstrap';
import styles from './styles/FileUploader.module.css';
import Cross from './Cross.js'
import FileWithIcon from './FileWithIcon.js';


const FileUploader = ({ onUpload, acceptedFiles, setAcceptedFiles , onProcess}) => {
  const [uploading, setUploading] = React.useState(false);
 // const [acceptedFiles, setAcceptedFiles] = React.useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    setUploading(true);
    try {
     // await onUpload(acceptedFiles);
     setAcceptedFiles(acceptedFiles);
    } finally {
      setUploading(false);
    }
  }, [onUpload]);

 

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.fileUploaderContainer}>
   {acceptedFiles.length==0 &&  <div {...getRootProps()} style={dropzoneStyles} className={[styles.dropzoneContainer, styles.border].join(' ')}>
      <input {...getInputProps()} />
      {uploading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
       <div style={{lineHeight:'10px'}}>
              <FileWithIcon />
              <p>Drop File Here</p> 
              <p>- or -</p> 
              <p>Click to upload</p> 
            </div>
      )}
  
    </div>
    }      
     { acceptedFiles.length >0 && <div className={[styles.tempFileTable, styles.border].join(' ')}>
      <div className={styles.tempFileHeader}><div  style={{lineHeight:'10px'}}><FileWithIcon className={'tableFileIcon'} /></div> <Cross setAcceptedFiles={setAcceptedFiles}/></div>
                          {acceptedFiles.map((item, i)=>
                            <div className={[styles.row, i%2==0 ?styles.alternate:''].join(' ')}>
                                 <div className={[styles.col]}>{`Name: ${item.name}`} </div> 
                                 <div className={styles.col}>{`Size: ${item.size}`} </div>
                            </div> 
                         )}
      </div> }     
     </div>
  );
};

const dropzoneStyles = {
  border: '1px solid #374151',
  borderRadius: '8px',
  padding: '30px',
  textAlign: 'center',
  cursor: 'pointer',
  marginTop : '2em',
  marginBottom: '2em'

};

export default FileUploader;