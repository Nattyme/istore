import './style.css';

const ColorCheckbox = (props) => {
    const clickHandler = (e) => {
        props.setColorsList(function(prev) {
            console.log(e.target.checked)
            console.log(e.target.value)
            return {
                ...prev,
                [e.target.value]: e.target.checked,  
            }

        });
    }

    return (
        <label className="color-checkbox">
            <input 
                type="checkbox" 
                className="color-checkbox__real visually-hidden" 
                onChange={clickHandler}
                checked={props.colorsList[props.value]}
                value={props.value}
            />
            <span className={`color-checkbox__visible color-checkbox__visible--${props.color}`}></span>
        </label>
    );
};

export {ColorCheckbox as ColorCheckbox};