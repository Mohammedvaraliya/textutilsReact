import React, { useState } from 'react'


export default function TestForm(props) {
    const handleUpUppercase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleUpPunctuations = () => {
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        const result = text.replace(regex, '');
        setText(result)
    }

    const handleUpLower = () => {
        let LoweText = text.toLocaleLowerCase();
        setText(LoweText);
    }

    const handleUpNewLine = () => {
        const regex = /\n/g;
        const result = text.replace(regex, '');
        setText(result)
    }

    const handleUpExtraSpace = () => {
        const regex = /\s+/g;
        const result = text.replace(regex, ' ');
        setText(result)
    }

    const handleUpClearText = () => {
        const result = text.replace(text, '');
        setText(result)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState("0");

    return (
        <>
            <div className="container my-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpUppercase}>Convert To Uppercase</button>
                <button className="btn btn-primary" onClick={handleUpLower}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleUpPunctuations}>Remove Punctuations</button>
                <button className="btn btn-primary" onClick={handleUpNewLine}>Remove New Line</button>
                <button className="btn btn-primary mx-2" onClick={handleUpExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary" onClick={handleUpClearText}>Clear Text</button>
            </div>

            <div className="container">
                <h2>Your text summary</h2>
                <p>character Count: {text.length} | Word Count: {text.split(" ").length}</p>
                <p><b>{0.008 * text.split(" ").length} Minutes Read</b></p>
                <br />
                <h2>Preview</h2>
                <pre className='mycode'><b>{text}</b></pre>
            </div>
        </>
    )
}
