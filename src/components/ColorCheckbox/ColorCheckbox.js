import './style.css';

const ColorCheckbox = (props) => {
    return (
        <label className="color-checkbox">
            <input type="checkbox" className="color-checkbox__real" />
            <span className="color-checkbox__visible"></span>
        </label>
    );
};

export default Checkbox;