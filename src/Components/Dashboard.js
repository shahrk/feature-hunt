import { useEffect, useState } from 'react';
import {ReactSession} from 'react-client-session';
import ProductTile from './ProductTile';
import Service from '../Service';
import Header from './Header';
import Feature from './Feature';

const Dashboard = ({query}) => {
  const [sortBy, setSortBy] = useState('timestamp');
  const [products, setProducts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [user, setUser] = useState(['']);

  /* TODO : add filter to get only the project that a user owns */
  useEffect(() => {
    Service.get('products').then(products => setProducts(products));
    setUser(ReactSession.get("username"));
  }, []);

  return (
    <div>
      <Header/>
    <div className="container">
      <div className="child">
        <div className="product-title">
          <h3>YOUR PRODUCTS-</h3>
          <h3>{user}</h3>
          <div className="sort">
            <p className={sortBy === 'votes' ? 'highlight' : ''} onClick={() => setSortBy('votes')}>POPULAR</p>
            <p> | </p>
            <p className={sortBy === 'timestamp' ? 'highlight' : ''} onClick={() => setSortBy('timestamp')}>LATEST</p>
          </div>
        </div>
      </div>
      {products.map((p, index) => { p['index'] = index; return p; }).filter(p => query ? p.tags.includes(query.toLowerCase()) || p.name.toLowerCase().includes(query.toLowerCase()) : true).sort((p1, p2) => p2[sortBy] - p1[sortBy]).map(
        (product) => 
        <div>
            <ProductTile key={product.id} products={products} index={product.index} setProducts={setProducts} />
            {features.map((f, index) => { f['index'] = index; return f; }).filter(f => query ? f.tags.includes(query.toLowerCase()) || f.text.toLowerCase().includes(query.toLowerCase()) : true).sort((f1, f2) => f2[sortBy] - f1[sortBy]).map(
        (feature) => <Feature key={feature.id} features={features} index={feature.index} setFeatures={setFeatures} />
        , setFeatures)}
        </div>
        , setProducts)}
      </div>
    </div>
  );
};

export default Dashboard;
