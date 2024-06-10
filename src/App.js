import { useState } from 'react';
import {Header as Header} from './components/Header/Header';
import {Main as Main} from './components/Main/Main';
import {Footer as Footer} from './components/Footer/Footer';

import products from './data/products.json';

function App() {

    const [filter, setFilter] = useState({
        price: {
            min: 10000,
            max: 100000,
        }
    })


    return (
        <div className="App">
        <Header />
        <Main products = {products} filter={filter} setFilter={setFilter}/>
        <Footer />
        </div> 
    );
}

export {App as App};
