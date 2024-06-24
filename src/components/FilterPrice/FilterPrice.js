import {Input as Input} from '../Input/Input';

const FilterPrice = ({filter, setFilter}) => {
    return ( 
        <div className="filter">
            <div className="filter__title">Цена</div>
            <div className="filter__body filter__body--price">
                <Input 
                    type="min" 
                    value={`${filter.price.min}`} 
                    setFilter={setFilter}
                />
                <span>-</span>

                <Input 
                    type="max" 
                    value={`${filter.price.max}`} 
                    setFilter={setFilter}
                />
            </div>
        </div>
     );
}
 
export {FilterPrice as FilterPrice};