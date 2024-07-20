import React from 'react';
import {Button} from 'react-bootstrap'

const stylesheet = {
    buttonStyle : {backgroundColor: '#0b0f19', borderColor: '#4b5563', lineHeight: '1',  margin : '5px'},
    buttonFont : {fontSize: '12px', padding: '0'}
}

const Cross =  (props) => {

    const crossClickHandler = ()=>{
        props.setAcceptedFiles([]);
    }

    return  (<Button className="btn btn-sm" onClick = {crossClickHandler} style={stylesheet.buttonStyle}>
    <span className="text-white" style={stylesheet.buttonFont}>×</span>
  </Button>)
}
export default Cross;