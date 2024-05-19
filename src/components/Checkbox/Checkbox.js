import './style.css';

const Checkbox = (props) => {
    return (
        <label className="checkbox">
            <input type="checkbox" className="checkbox__real" name="checkbox-filter"/>
            <span className="checkbox__custom"></span>
            <span className="checkbox__title">{props.value}</span>
        </label>
    );
}

export default Checkbox;