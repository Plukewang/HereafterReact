import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Cover from './components/Cover';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

//TODO: DOWNLOAD AND REHOST THE PATTERN!
function App() {
  return (
    <div className="App open-sans-app">
      <header>

      </header>
      <body>
        <div className='container'>
          <Cover />
          <Head />
          <Nav /> 
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
