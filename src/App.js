import { useEffect, useState } from 'react';
import {Header as Header} from './components/Header/Header';
import {Main as Main} from './components/Main/Main';
import {Footer as Footer} from './components/Footer/Footer';

import productsData from './data/products.json';

function App() {

    const [products, setProducts] = useState(productsData);

    const categories = [];
    productsData.forEach((product)=>{
        if(!categories.includes(product.cat)) {
            categories.push(product.cat);
        }
    })

    console.log(categories)

    const [filter, setFilter] = useState({
        category: 'all',
        price: {
            min: 10000,
            max: 100000,
        },
    });

    useEffect(() => {
        setProducts(function(){
            return productsData.filter((product)=>{
                if (product.price >= filter.price.min && product.price <= filter.price.max) {
                    return true;
                }
            })
        })
    }, [filter]);


    return (
        <div className="App">
        <Header />
        <Main products = {products} filter={filter} setFilter={setFilter}/>
        <Footer />
        </div> 
    );
}

export {App as App};
