import { useState } from 'react';
import {Input as Input} from '../Input/Input';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const FilterPrice = ({filter, setFilter}) => {

    const [value, setValue] = useState([30, 60]);


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

            <div className="title">Controlled</div>
            <RangeSlider value={value} onInput={setValue} />

        </div>
     );
}
 
export {FilterPrice as FilterPrice};