import './style.css';
import {Categories as Categories} from '../Categories/Categories';
import {Filter as Filter}  from '../Filter/Filter';
import {Card as Card} from '../Card/Card';

function Main ({products, filter}) {
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories />
               <Filter filter={filter}/>
            </aside>
            <div className="content content--cards-grid">
                {products.map((product, index) => <Card key={index} product={product} />)}
            </div>
        </main>
    )
}

export {Main as Main};