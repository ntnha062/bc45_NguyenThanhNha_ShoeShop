import logo from './logo.svg';
import './App.css';
import ProductList from './Props/ProductList';
import dataJson from './Data/data.json'

function App() {
  return (
    <div className='container-fluid' style={{paddingLeft:'500px'}}>
      <h3 className='py-5' style={{fontSize:'50px'}}>Shoe Shop</h3>
      <div className='row'>
        <div className='col-4'>
          <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="shop-tab" data-bs-toggle="tab" data-bs-target="#shop" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
              </li>
            </ul>

            <div className="tab-content text-center">
              <div className="tab-pane active" id="home" style={{width:'1000px'}} role="tabpanel" aria-labelledby="home-tab">
                 <ProductList arrProduct={dataJson} /> 
              </div>
              <div className="tab-pane" id="shop" role="tabpanel" aria-labelledby="shop-tab"> Shop </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
