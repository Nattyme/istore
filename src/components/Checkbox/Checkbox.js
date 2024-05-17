import './style.css';

const Checkbox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" className="checkbox__item"/>
            <span className="checkbox__title">{props.value}</span>
        </div>
    );
}

export default Checkbox;