import { useState } from 'react';
import { useEffect } from 'react';
import {Checkbox as Checkbox} from '../Checkbox/Checkbox';
import {ColorCheckbox as ColorCheckbox} from '../ColorCheckbox/ColorCheckbox';
import {Input as Input} from '../Input/Input';
import './style.css';

const Filter = ({filter, setFilter}) => {

    const [memoryList, setMemoryList] = useState({
        '128 Gb': true,
        '256 Gb': true,
        '512 Gb': true,
        '1 Tb': true,
        '2 Tb': true
    });

    useEffect(() => {
        let memoryFilter = [];

        for(let key in memoryList) {
            if (memoryList[key]) memoryFilter.push(key);
        }


        setFilter((prev) => {
            return {
                ...prev,
                memory: memoryFilter,
            };
        });
    }, [memoryList]);

    let memoryListJSX = [];

    for (let key in memoryList) {
        memoryListJSX.push(
        <Checkbox 
            key={key}
            memoryList={memoryList} 
            setMemoryList={setMemoryList}
            value={key} 
        />
    );
    }

    const [colorsList, setColorsList] = useState({
        'white': true,
        'gray': true,
        'black': true,
        'spacegray': true,
        'gold': true,
        'blue': true,
        'green': true
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

    return (
        <>
            <div className="widget">
                <div className="widget__title">Фильтр</div>

                <div className="widget__body widget__body--filters-list">
                    <div className="filter">
                        <div className="filter__title">Цена</div>
                        <div className="filter__body filter__body--price">
                            <Input type="min" value={`${filter.price.min}`} setFilter={setFilter}/>
                            <span>-</span>

                            <Input type="max" value={`${filter.price.max}`} setFilter={setFilter}/>
                        </div>
                    </div>

                    <div className="filter">
                        <div className="filter__title">Объем памяти</div>
                        <div className="filter__body filter__body--checkbox-list">
                            {memoryListJSX}
                        </div>
                    </div>

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