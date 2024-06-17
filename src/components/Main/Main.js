import './style.css';
import {Categories as Categories} from '../Categories/Categories';
import {Filter as Filter}  from '../Filter/Filter';
import {Card as Card} from '../Card/Card';

function Main ({products, filter, setFilter, cats}) {
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories cats={cats}/>
               <Filter filter={filter} setFilter={setFilter}/>
            </aside>


            <div className="content content--cards-grid">
                <div>
                    <p>Категория:</p>
                    <p>Цена от:{filter.price.min}</p>
                    <p>Цена до:{filter.price.max}</p>
                </div>
                {products.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </main>
    )
}

export {Main as Main};