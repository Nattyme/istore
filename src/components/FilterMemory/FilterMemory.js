import { useState, useEffect } from 'react';
import {Checkbox as Checkbox} from '../Checkbox/Checkbox';

const FilterMemory = ({filter, setFilter}) => {
    const [memoryList, setMemoryList] = useState({
        '128 Gb': false,
        '256 Gb': false,
        '512 Gb': false,
        '1 Tb': false,
        '2 Tb': false
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

    return ( 
        <div className="filter">
            <div className="filter__title">Объем памяти</div>
            <div className="filter__body filter__body--checkbox-list">
                {memoryListJSX}
            </div>
        </div>
    );
}
 
export {FilterMemory as FilterMemory};