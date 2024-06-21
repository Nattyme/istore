import './style.css';

const Categories = ({cats, catsData}) => {

    const catsList =  cats.map((cat, index)=>{
        return (
            <li key={index}>
                <a href="#!" data-cat={cat}>
                    {cat}
                </a>
            </li>
        );
    })
    
    return (
        <div className="widget">
            <div className="widget__title">
                Категории
            </div>

            <div className="widget__body">
                <ul className="cat-list">{catsList}</ul>
            </div>
        </div>
    );
}

export {Categories as Categories};