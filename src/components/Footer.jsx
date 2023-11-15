import { useState } from "react";

function Footer({addTask}) {
  const [inputText, setInputText] = useState("")

  const validateTaskBeforeAdd = () => {
    if (inputText != '') {
       addTask(inputText);
       setInputText("");
    }
   
  }

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      validateTaskBeforeAdd()
    }
  }

  const handleButtonClick = () =>{
    validateTaskBeforeAdd()
  }

  return (
    <footer>
      <div className="footer-section">
        <input type="text" id="inputField" value={inputText} onChange={handleInput} onKeyDown={handleKeyDown}/> <button onClick={handleButtonClick}>Add</button>
      </div>
    </footer>
  );
}

export default Footer;
