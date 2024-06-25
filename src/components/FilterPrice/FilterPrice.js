import { useState, useEffect } from 'react';
import {Input as Input} from '../Input/Input';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const FilterPrice = ({filter, setFilter}) => {

    const [value, setValue] = useState([filter.price.min, filter.price.max]);
    useEffect (() => {
        setFilter((prev) => {
            return {
                ...prev,
                price: {
                    min: value[0],
                    max: value[1]
                }
            }
        })
    }, [value]);

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

            <div className='filter__body--range'>
                <RangeSlider 
                    id="range-slider-gradient"
                    value={value} 
                    onInput={setValue} 
                    min={0} 
                    max={200000}
                />
            </div>

        </div>
     );
}
 
export {FilterPrice as FilterPrice};