import './style.css';

const Checkbox = (props) => {

    const clickHandler = (e) => {
        props.setMemoryList(function(prev) {
            return {
                ...prev,
                [e.target.value]: e.target.checked,

            }

        });
    };

    return (
        <label className="checkbox">
            <input 
                type="checkbox" 
                className="checkbox__real" 
                onChange={clickHandler}
                checked={props.memoryList[props.value]}
                value={props.value}
            />
            <span className="checkbox__custom"></span>
            <span className="checkbox__title">{props.value}</span>
        </label>
    );
}

export {Checkbox as Checkbox};