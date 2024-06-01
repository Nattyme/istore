import './style.css';

const ColorCheckbox = (props) => {
    return (
        <label className="color-checkbox">
            <input type="checkbox" className="color-checkbox__real visually-hidden" />
            <span className={`color-checkbox__visible color-checkbox__visible--${props.color}`}></span>
        </label>
    );
};

export {ColorCheckbox as ColorCheckbox};