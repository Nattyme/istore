import { useState, useEffect } from 'react';
import { ColorCheckbox } from '../ColorCheckbox/ColorCheckbox';

const FilterColor = ({filter, setFilter}) => {

    // Состояние по цветам для рендера фильтра
    const [colors, setColors] = useState({
        white: true,
        gray: true,
        black: false,
        spacegray: false,
        gold: false,
        blue: false,
        green: true
    });

    // Обновляем глобальный фильтр для фильтрации товаров
    useEffect(() => {
        let colorsFilter = []; // выбранные цвета 

        for(let key in colors) {
            if (colors[key]) colorsFilter.push(key);
        }


        setFilter((prev) => {
            return {
                ...prev,
                colors: colorsFilter,
            };
        });
    }, [colors]);

    // Генерируем jsx разметку
    let colorsListJSX = [];

    for (let key in colors) {
        colorsListJSX.push(
            <ColorCheckbox 
                key={key} 
                color={key}
                value={key}
                colors={colors} 
                setColors={setColors}
            />
        )
    }

    return ( 
        <div className="filter">
            <div className="filter__title">Цвет</div>
            <div className="filter__body filter__body--colors-list">
                {colorsListJSX}
            </div>
        </div>
     );
}
 
export {FilterColor as FilterColor};