import { useState as useState} from 'react';
import './style.css';

const Input = ({value, setFilter, type}) => {
    const formatPrice = (price) => {
        //Создаю форматер
        const formatter = new Intl.NumberFormat('ru-Ru', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
        });

        return formatter.format(price);
    }
    
    return (
        <input 
            type="text" 
            className="input" 
            value={formatPrice(value)} 
            onChange={ (e) => { 
            
                setFilter((prev) => {
                    console.log(e.target.value)
                    let newPrice = e.target.value;
                    newPrice = newPrice.replaceAll(' ', '');
                    newPrice = newPrice.replaceAll(',', '.');
                    newPrice = newPrice.replaceAll('₽', '');

                    console.log(newPrice)

                    return {
                        ...prev,
                        price: {
                            ...prev.price,
                            [type]: newPrice,
                        }
                    }
                }) 
            }}
        />
    );
}

export {Input as Input};