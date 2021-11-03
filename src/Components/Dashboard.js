import { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import ProductTile from './ProductTile';
import Service from '../Service';
import Header from './Header';
import Feature from './Feature';
import { Alert } from '@mui/material';

const Dashboard = ({query}) => {
  const [sortBy, setSortBy] = useState('timestamp');
  const [products, setProducts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [user, setUser] = useState(['']);

  useEffect(() => {
    Service.get('products').then(products => setProducts(products));
    setUser(ReactSession.get("username"));
  }, []);

  /**
   * This function checks whether the signed in user is associated with the product.
   * @param {any} product
   * @returns {boolean} boolean
   */
  const isProductOwner = (product) => {
    return product.users && product.users.includes(user);
  }

  return (
    <div>
      <Header/>
      <Alert data-testid="dash_alert" severity="success">You are logged in as {user}</Alert>
      <div className="container">
        <div className="child">
          <div className="product-title">
            <h3 data-testid="dash_proj">YOUR PROJECTS-</h3>
            <h3 data-testid="dash_user">{user}</h3>
            <div className="sort">
              <p 
              className={sortBy === 'votes' ? 'highlight' : ''} 
              data-testid="dash_sortpop"
              onClick={() => setSortBy('votes')}>POPULAR</p>
              <p> | </p>
              <p 
              className={sortBy === 'timestamp' ? 'highlight' : ''}
              data-testid="dash_sorttime" 
              onClick={() => setSortBy('timestamp')}>LATEST</p>

            </div>
          </div>
        </div>
        {products.map((p, index) => { p['index'] = index; return p; }).filter(p => query ? p.tags.includes(query.toLowerCase()) || p.name.toLowerCase().includes(query.toLowerCase()) : true).sort((p1, p2) => p2[sortBy] - p1[sortBy]).map(
          (product) => 
          <div>
              {isProductOwner(product) && <ProductTile key={product.id} products={products} index={product.index} setProducts={setProducts} />}
              {features.map((f, index) => { f['index'] = index; return f; }).filter(f => query ? f.tags.includes(query.toLowerCase()) || f.text.toLowerCase().includes(query.toLowerCase()) : true).sort((f1, f2) => f2[sortBy] - f1[sortBy]).map(
          (feature) => <Feature key={feature.id} features={features} index={feature.index} setFeatures={setFeatures} editable={isProductOwner(product)} />
          , setFeatures)}
          </div>
          , setProducts)}
        </div>
    </div>
  );
};

export default Dashboard;
