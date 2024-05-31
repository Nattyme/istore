import './style.css';

const Card = () => {
    return (
        <article className='card'>

            <img className="card__img" src="./img/01.jpg" srcSet="./../../img/01@2x.jpg 2x" alt="Часы Apple Watch Белый"/>
            <h3 className="card__title">Часы Apple Watch Белый</h3>
            <p className="card__price">18 000 ₽</p>
        </article>
    );
}

export default Card;