import './style.css';

const Categories = ({cats}) => {
    return (
        <div className="widget">
            <div className="widget__title">
                Категории
            </div>

            <div className="widget__body">
                <ul className="cat-list">
                {cats.map((cat, index)=>{
                        return (
                            <li key={index}>
                                <a href="#!" data-cat={cat}>
                                    {cat}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export {Categories as Categories};