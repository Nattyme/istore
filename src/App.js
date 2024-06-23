import { useEffect, useState } from 'react';
import {Header as Header} from './components/Header/Header';
import {Main as Main} from './components/Main/Main';
import {Footer as Footer} from './components/Footer/Footer';

import productsData from './data/products.json';
import catsData from './data/cats.json';

function App() {

    const [products, setProducts] = useState(productsData);

    const cats = ['all'];
    productsData.forEach((product)=>{
        if(!cats.includes(product.cat)) {
            cats.push(product.cat);
        }
    });

    const [filter, setFilter] = useState({
        category: 'all',

        price: {
            min: 10000,
            max: 200000,
        },

        memory: ['512 Gb', '1 Tb', '2 Tb'],

        color: ['white', 'gray'],
    });

    useEffect(() => {
        setProducts(function(){
            let filteredItems = [];

            //Фильтр по категории
            filteredItems = productsData.filter((product) => {
                if (filter.category == 'all') return true;
                return filter.category == product.cat;
            });

            //Фильтр по цене
            filteredItems = filteredItems.filter((product)=>{
                if (product.price >= filter.price.min && product.price <= filter.price.max) {
                    return true;
                }
            });

            //Фильтр по памяти
            filteredItems = filteredItems.filter((product)=>{
                if (filter.memory.length === 0) return true;

                return filter.memory.includes(product.memory); 
            });

            //Фильтр по цвету
            filteredItems = filteredItems.filter((product)=>{
                if (filter.color.length === 0) return true;
                return filter.color.includes(product.color); 
            });

            return filteredItems;
        })
    }, [filter]);


    return (
        <div className="App">
        <Header />
        <Main 
            products = {products} 
            filter={filter} 
            setFilter={setFilter}
            catsData={catsData}
            cats={cats}
            />
        <Footer />
        </div> 
    );
}

export {App as App};
