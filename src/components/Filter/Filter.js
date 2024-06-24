import { useState, useEffect } from 'react';
import {Checkbox as Checkbox} from '../Checkbox/Checkbox';
import {ColorCheckbox as ColorCheckbox} from '../ColorCheckbox/ColorCheckbox';
import {Input as Input} from '../Input/Input';
import './style.css';
import { FilterPrice } from '../FilterPrice/FilterPrice';
import { FilterMemory } from '../FilterMemory/FilterMemory';

const Filter = ({filter, setFilter}) => {
    const [colorsList, setColorsList] = useState({
        'white': false,
        'gray': false,
        'black': false,
        'spacegray': false,
        'gold': false,
        'blue': false,
        'green': false
    });

    useEffect (() => {
        let colorsListFilter = [];

        for(let key in colorsList) {
            if (colorsList[key]) colorsListFilter.push(key);
        }

        setFilter ((prev) => {
            return {
                ...prev,
                color: colorsListFilter,
            }
        });

    }, [colorsList]);

    let colorsListJSX = [];

    for (let key in colorsList) {
        colorsListJSX.push(
            <ColorCheckbox 
                key={key} 
                colorsList={colorsList}
                setColorsList={setColorsList}
                color={key} 
            />
        )
    }
    console.log(colorsListJSX)

    return (
        <>
            <div className="widget">
                <div className="widget__title">Фильтр</div>

                <div className="widget__body widget__body--filters-list">
                    <FilterPrice 
                        filter={filter}
                        setFilter={setFilter}
                    />

                    <FilterMemory 
                        filter={filter}
                        setFilter={setFilter}
                    />

                    <div className="filter">
                        <div className="filter__title">Цвет</div>
                        <div className="filter__body filter__body--colors-list">
                            {colorsListJSX}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export {Filter as Filter};