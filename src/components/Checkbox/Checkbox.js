import './style.css';

const Checkbox = () => {
    return (
        <div className="checkbox">
            <input type="checkbox" className="checkbox__item"/>
            <span className="checkbox__title">128 Gb</span>
        </div>
    );
}

export default Checkbox;