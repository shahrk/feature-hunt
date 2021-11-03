import { useEffect, useState } from 'react';
import ProductTile from './ProductTile';
import Service from '../Service';

const Home = ({query}) => {
  const [sortBy, setSortBy] = useState('timestamp');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Service.get('products').then(products => setProducts(products));
  }, []);
  return (
    <div className="container">
      <div className="child">
        <div className="product-title">
          <h3 data-testid="home_header">PRODUCTS</h3>
          <div className="sort">
            <p 
            className={sortBy === 'votes' ? 'highlight' : ''}
            data-testid="home_sortpop"
            onClick={() => setSortBy('votes')}>POPULAR
            </p>
            <p> | </p>
            <p 
            className={sortBy === 'timestamp' ? 'highlight' : ''} 
            data-testid="home_sorttime"
            onClick={() => setSortBy('timestamp')}>LATEST
            </p>
          </div>
        </div>
      </div>
      {products.map((p, index) => { p['index'] = index; return p; }).filter(p => query ? p.tags.includes(query.toLowerCase()) || p.name.toLowerCase().includes(query.toLowerCase()) : true).sort((p1, p2) => p2[sortBy] - p1[sortBy]).map(
        (product) => <ProductTile key={product.id} products={products} index={product.index} setProducts={setProducts} />
        , setProducts)}
    </div>
  );
};

export default Home;
