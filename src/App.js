import './App.css';
import ProductComponent from './container/ProductComponent';
import ProductListing from './container/ProductListing';

function App() {
  return (
    <div className="App">
      <h1>Redux demo</h1>
      <ProductListing/>
      <ProductComponent/>
    </div>
  );
}

export default App;
