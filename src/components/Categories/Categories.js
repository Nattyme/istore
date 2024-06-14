import './style.css';

function Categories () {
    return (
        <div className="widget">
            <div className="widget__title">
                Категории
            </div>

            <div className="widget__body">
                <ul className="cat-list">
                    <li><a href="#!" data-cat="all">Все</a></li>
                    <li><a href="#!" data-cat="note">Ноутбуки</a></li>
                    <li><a href="#!" data-cat="phone">Телефоны</a></li>
                    <li><a href="#!" data-cat="tablet">Планшеты</a></li>
                    <li><a href="#!" data-cat="comp">Компьютеры</a></li>
                    <li><a href="#!" data-cat="watch">Часы</a></li>
                </ul>
            </div>
        </div>
    )
}

export {Categories as Categories};