import './style.css';

function Filter () {
    return (
        <>
             <div className="widget">
            <div className="widget__title">
                Фильтр
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
        </>
    );
}

export default Filter;