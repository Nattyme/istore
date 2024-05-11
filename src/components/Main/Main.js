import './style.css';
import Categories from '../Categories/Categories';

function Main () {
    return (
        <main className="main container">
            <aside className="sidebar">
               <Categories />
            </aside>
            <div className="content">content</div>
        </main>
    )
}

export default Main;