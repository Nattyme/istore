import './style.css';
import {Categories as Categories} from '../Categories/Categories';
import {Filter as Filter}  from '../Filter/Filter';
import {Card as Card} from '../Card/Card';

const Main = ({products, cats, catsData}) => {
    
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories 
                    cats={cats} 
                    catsData={catsData}
                />
               <Filter />
            </aside>


            <div className="content content--cards-grid">
                {/* <div>
                    <p>Категория:{filter.category}</p>
                    <p>Цена от:{filter.price.min}</p>
                    <p>Цена до:{filter.price.max}</p>
                    <p>Цвет:</p>
                </div> */}

                {products.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </main>
    )
}

export {Main as Main};