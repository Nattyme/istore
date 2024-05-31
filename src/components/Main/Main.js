import './style.css';
import Categories from '../Categories/Categories';
import Filter from '../Filter/Filter';
import Card from '../Card/Card';

function Main ({products}) {
    
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories />
               <Filter />
            </aside>
            <div className="content content--cards-grid">
                {products.map((product, index) => <Card key={index} product={product} />)}
            </div>
        </main>
    )
}

export default Main;