import React from 'react'
import { useState } from 'react'




export default function Textform(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upercase","sucess");
    }
    const handleLwClick=()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","sucess");
    }
    const handleCopy =()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied!!","sucess")
    }

    const handleOnChange=(event)=>{
       
        setText(event.target.value);
    }
    const[text,setText] = useState('Enter text here');
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            
            <button className="btn btn-primary mx-2 my-1" onClick={handleLwClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>copy</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>

            <h1>Your text summary </h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in text box"}</p>
        </div>
    </>
  )
}
