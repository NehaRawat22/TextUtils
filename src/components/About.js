import React from 'react'

export default function About(props) {
  let myStyle= {
    color: props.mode==='white'?'white':'black',
    backgroundColor: props.mode==='white'?'rgb(36 74 104)':'white',
    border: '2px solid',
    borderColor: props.mode==='white'?'white':'black'
  }
  //const[myStyle, setMyStyle] = useState({
  //  color: 'black',
  //  backgroundColor: 'white',
  //  border: '1px solid black'
  //  })

  return (
    <>
    <div className="container">
      <h2 className="my-3" style={{color: props.mode==='white'?'white':'black'}}>About Us</h2>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body" style={{backgroundColor: props.mode==='white'?'rgb(36 74 104)':'white', color: props.mode==='white'?'white':'black'}}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or minutes to read your whole text.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body" style={{backgroundColor: props.mode==='white'?'rgb(36 74 104)':'white', color: props.mode==='white'?'white':'black'}}>
        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body" style={{backgroundColor: props.mode==='white'?'rgb(36 74 104)':'white', color: props.mode==='white'?'white':'black'}}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, pdf documents, essays,etc.
      </div>
    </div>
  </div>
</div>
</div>
</>   
)
}