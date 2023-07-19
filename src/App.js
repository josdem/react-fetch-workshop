import './App.css';
import ProductList from './components/ProductList';

const email = 'contact@josdem.io';
const subject = 'Hello and welcome!';
const body = 'This is the body of the email';

const App = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <p>Sneakers World Shopping</p>
            </header>
            <ProductList />
            <footer className='App-footer'>
                <a href={`mailto:${email}?subject=${subject}&body=${body}`}>Contact Us</a>
            </footer>
        </div>
    );
};

export default App;
