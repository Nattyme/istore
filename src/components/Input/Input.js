import { useState as useState} from 'react';
import './style.css';

const Input = (props) => {
    const [price, setPrice] = useState(props.value);
    return <input type="text" className="input" value={price} onChange={(e) => { setPrice(e.target.value) }}/>;
}

export {Input as Input};