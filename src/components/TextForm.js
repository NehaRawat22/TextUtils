import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState('');

  const handleUpClick = ()=>{
    let newText1 = text.toUpperCase();
    setText(newText1);
    props.showAlert('Converted to uppercase!','success');
  }
  const handleLoClick = ()=>{
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert('Converted to lowercase!','success');
  }
  const handleClearClick = ()=>{
    let newText2 = '';
    setText(newText2);
    props.showAlert('Text is cleared!','success');
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to the clipboard!','success');
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces have been removed!','success');
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

    return (
    <>
    <div className='container' style={{textColor: props.cls==='dark'?'light':'#042743'}}>
      <h3 className='mb-4'>{props.heading}</h3>
      <div className="container1">
      <label htmlFor="myBox" className="form-label">Enter your text</label>
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3" style={{backgroundColor: props.cls==='secondary'?'#13466e':'white'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container2 my-4" style={{color: props.cls==='dark'?'light':'#042743'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preview Of Your Text</h3>
      <p>{text.length>0? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
