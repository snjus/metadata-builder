import React from "react";
import { FileEarmark  } from 'react-bootstrap-icons';
import styles from './styles/FileWithIcon.module.css';

const FileWithIcon = (props) =>{
    const className = props.className;
    return (
        <div className={styles.leftFileIconContainer}>
          <div className={[styles.leftFileIcon, className && styles.tableFileIcon].join(' ')}> <FileEarmark  />
          File</div></div> 
    )
}
export default FileWithIcon;