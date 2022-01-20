import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    //function for uppercase
    const handleUpOnClick=()=>{
        const NewText=text.toUpperCase();
        setText(NewText)
        props.showAlert("success", "Converted To Uppercase")
    }

    //function for loercase
    const handleLoOnClick = () => {
        const NewText = text.toLowerCase();
        setText(NewText)
        props.showAlert("success", "Converted To Lowercase")
    }

    //function to clear form
    const handleClearTextOnClick = () => {
        setText("");
        props.showAlert("success", "Text cleared")
    }

    //function to copy text
    const handleCopyOnClick = () => {
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("success","Copied to Clipboard")
    }

    //function to remove extra space
    const handleSpaceOnClick = () => {
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Extra Spaces removed")
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <div className="mb-3 " >
                <h3 style={{ color: props.toggleChecker === "dark" ? 'black' : 'white' }}>{props.heading}</h3>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="5" style={{ color: props.toggleChecker === "dark" ? 'black' : 'white', backgroundColor: props.toggleChecker === "dark" ? '#FFF550' : '#505050' }}></textarea>
                <button disabled={text.length=== 0} className={`btn btn-${props.toggleChecker === "dark" ? "warning" : "dark"}  my-3 mx-3`} onClick={handleLoOnClick}>Convert to lowercase</button>
                <button disabled={text.length=== 0} className={`btn btn-${props.toggleChecker === "dark" ? "warning" : "dark"}  my-3 mx-3`} onClick={handleClearTextOnClick}>Clear text</button>
                <button disabled={text.length=== 0} className={`btn btn-${props.toggleChecker === "dark" ? "warning" : "dark"}  my-3 mx-3`} onClick={handleUpOnClick}>Convert to uppercase</button>
                <button disabled={text.length=== 0} className={`btn btn-${props.toggleChecker === "dark" ? "warning" : "dark"}  my-3 mx-3`} onClick={handleCopyOnClick}>Copy text</button>
                <button disabled={text.length=== 0} className={`btn btn-${props.toggleChecker === "dark" ? "warning" : "dark"}  my-3 mx-3`} onClick={handleSpaceOnClick}>Remove extra spaces</button>
            </div>
            <div className="container" style={{ color: props.toggleChecker === "dark" ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length*0.8}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
