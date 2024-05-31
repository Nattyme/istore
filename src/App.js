import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import products from './data/products.json';

function App() {


    return (
        <div className="App">
        <Header />
        <Main products = {products}/>
        <Footer />
        </div>
    );
}

export default App;
