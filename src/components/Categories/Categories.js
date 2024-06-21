import './style.css';

const Categories = ({cats, catsData, setFilter}) => {
    const catsList = cats.map((cat, index) => {
        
        const catInfo = catsData.find((value) => {
           
            if (value.slug === cat) {
                return true;
            }
        });

        const clickHandler = (e) => {
            e.preventDefault();
            console.log('Change category!')
            console.log(e.target.dataset.cat)
            setFilter ((prev) => {
                return {
                    ...prev,
                    category: e.target.dataset.cat,
                }
            })
        }

        return (
            <li key={index}>
                <a href="#!" data-cat={cat} onClick={clickHandler}>
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