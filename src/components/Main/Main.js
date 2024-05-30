import './style.css';
import Categories from '../Categories/Categories';
import Filter from '../Filter/Filter';
import Card from '../Card/Card';

function Main () {
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories />
               <Filter />
            </aside>
            <div className="content content--cards-grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    )
}

export default Main;