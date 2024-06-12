import { useState as useState} from 'react';
import './style.css';

const Input = ({value, setFilter, type}) => {
    // const [price, setPrice] = useState(props.value);
    
    return (
    <input 
    type="text" 
    className="input" 
    value={value} 
    onChange={ (e) => { 
        setFilter((prev) => {
            // prev.price.min
        }) 
    }}
    />
    );
}

export {Input as Input};