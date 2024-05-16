import Input from '../Input/Input';
import './style.css';

function Filter () {
    return (
        <>
            <div className="widget">
                <div className="widget__title">Фильтр</div>

                <div className="widget__body widget__body--filters-list">
                    <div className="filter">
                        <div className="filter__title">Цена</div>
                        <div className="filter__body filter__body--price">
                            <Input value="10 000 р" />
                            <span>-</span>
                            <Input value="80 000 р"/>
                        </div>
                    </div>

                    <div className="filter">
                        <div className="filter__title">Объем памяти</div>
                        <div className="filter__body">----</div>
                    </div>

                    <div className="filter">
                        <div className="filter__title">Цвет</div>
                        <div className="filter__body">----</div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Filter;