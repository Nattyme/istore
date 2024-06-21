import './style.css';

const Categories = ({cats, catsData}) => {
    console.log(catsData)
    const catsList = cats.map((cat, index) => {
        
        const catInfo = catsData.find((value) => {
           
            if (value.slug === cat) {
                return true;
            }
        });

        return (
            <li key={index}>
                <a href="#!" data-cat={cat}>
                    {catInfo && catInfo.title}
                </a>
            </li>
        );
    });
    
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