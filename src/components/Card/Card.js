import './style.css';

const Card = () => {
    return (
        <div className='card'>

            <img className="card__img" src="./../../img/01.jpg" srcset="./../../img/01.jpg" alt="Alt"/>
            <h2 className="card__title">Часы Apple Watch Белый</h2>
            <div className="card__price">18 000 ₽</div>
        </div>
    );
}

export default Card;