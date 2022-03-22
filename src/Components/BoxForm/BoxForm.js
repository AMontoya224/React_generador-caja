import { useState } from 'react';




const BoxForm = (props) => {
    const [colorForm, setColorForm] = useState("");
    const [widthForm, setWidthForm] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newColor( colorForm, widthForm );
    };
    
    return (
        <form onSubmit={ handleSubmit } style={{margin : '50px auto'}}>
            <label htmlFor='color'>Color </label>
            <input 
                id='color'
                onChange={ (e) => setColorForm(e.target.value) }
                value={ colorForm }
            ></input>
            <label htmlFor='width'>Width </label>
            <input 
                id='width'
                onChange={ (e) => setWidthForm(e.target.value) }
                value={ widthForm }
            ></input>
            <button type="submit">
                Send
            </button>
        </form>
    );
};

export default BoxForm;