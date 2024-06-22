import './style.css';

const Checkbox = (props) => {

    const clickHandler = (e) => {
        e.preventDefault();
        console.log('checkbox click')
    };

    return (
        <label className="checkbox">
            <input type="checkbox" className="checkbox__real" name="checkbox-filter"/>
            <span className="checkbox__custom"></span>
            <span className="checkbox__title">{props.value}</span>
        </label>
    );
}

export {Checkbox as Checkbox};