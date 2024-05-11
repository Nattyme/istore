import './style.css';

function Main () {
    return (
        <main className="main container">
            <aside className="sidebar">
                <div className="widget">
                    <div className="widget__title">
                        Категории
                    </div>

                    <div className="widget__body">
                        <ul className="cat-list">
                            <li><a href="#!">Ноутбуки</a></li>
                            <li><a href="#!">Телефоны</a></li>
                            <li><a href="#!">Планшеты</a></li>
                            <li><a href="#!">Компьютеры</a></li>
                            <li><a href="#!">Часы</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
            <div className="content">content</div>
        </main>
    )
}

export default Main;