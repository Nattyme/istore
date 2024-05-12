import './style.css';
import Categories from '../Categories/Categories';
import Filter from '../Filter/Filter';

function Main () {
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories />
               <Filter />
            </aside>
            <div className="content">content</div>
        </main>
    )
}

export default Main;