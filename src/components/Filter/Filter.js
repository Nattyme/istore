import { useState } from 'react';
import {Checkbox as Checkbox} from '../Checkbox/Checkbox';
import {ColorCheckbox as ColorCheckbox} from '../ColorCheckbox/ColorCheckbox';
import {Input as Input} from '../Input/Input';
import './style.css';

const Filter = () => {

    const [price, setPrice] = useState({
        min: 10000,
        max: 100000
    });

    const memoryList = [
        '128 Gb',
        '256 Gb',
        '512 Gb',
        '1 Tb',
        '2 Tb'
    ];

    const colorsList = [
        'white',
        'gray',
        'black',
        'spacegray',
        'gold',
        'blue',
        'green'
    ]

    return (
        <>
            <div className="widget">
                <div className="widget__title">Фильтр</div>

                <div className="widget__body widget__body--filters-list">
                    <div className="filter">
                        <div className="filter__title">Цена</div>
                        <div className="filter__body filter__body--price">
                            <Input value={`${price.min} р`}/>
                            <span>-</span>
                            <Input value={`${price.max} р`}/>
                        </div>
                    </div>

                    <div className="filter">
                        <div className="filter__title">Объем памяти</div>
                        <div className="filter__body filter__body--checkbox-list">

                            {memoryList.map((el)=> {
                                return <Checkbox key={el} value={el} />
                            })}
                            
                        </div>
                    </div>

                    <div className="filter">
                        <div className="filter__title">Цвет</div>
                        <div className="filter__body filter__body--colors-list">

                            {colorsList.map((el) => {
                                return <ColorCheckbox key={el} color={el} />
                            })}
                           
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export {Filter as Filter};