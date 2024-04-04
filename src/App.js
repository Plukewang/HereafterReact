
import './App.css';
import Cover from './components/Cover';
import Head from './components/Head';
import Nav from './components/Nav';
import Home from './components/Routes/Home';


function App() {

  return (
    <div className="App cabin-app">
      <header>

      </header>

        <div className='container'>
          <Cover />
          <Head />
          <Nav /> 

        </div>

    </div>
  );
}

export default App;
