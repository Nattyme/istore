import './style.css';

const Card = ({product}) => {
    
    return (
        <article className='card'>

            <img className="card__img" src={`./img/${product.img}.jpg`} srcSet={`./img/${product.imgRetina}.jpg 2x`} alt={product.title}/>
            <h3 className="card__title">{product.title}</h3>
            <p className="card__price">{product.price}₽</p>
        </article>
    );
}

export default Card;