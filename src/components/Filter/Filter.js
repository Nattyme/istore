import { useContext } from 'react';
import { AppContext } from '../../App';
import './style.css';
import { FilterPrice } from '../FilterPrice/FilterPrice';
import { FilterMemory } from '../FilterMemory/FilterMemory';
import { FilterColor } from '../FilterColor/FilterColor';


const Filter = () => {
    const {filter, setFilter} = useContext(AppContext);

    return (
        <>
            <div className="widget">
                <div className="widget__title">Фильтр</div>

                <div className="widget__body widget__body--filters-list">

                    <FilterPrice filter={filter} setFilter={setFilter}/>

                    <FilterMemory filter={filter} setFilter={setFilter}/>

                    <FilterColor filter={filter} setFilter={setFilter}/>

                </div>
            </div>
        </>
    );
}

export {Filter as Filter};