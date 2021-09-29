import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Feature from './Feature';
import Service from '../Service';

const Product = ({query}) => {
  const { id } = useParams();
  const [newFeature, setNewFeature] = useState('');
  const [sortBy, setSortBy] = useState('votes');
  const handleNewFeatureChange = (event) => {
    setNewFeature(event.target.value);
  };
  const addFeature = (event) => {
    event.preventDefault();
    if (newFeature === '')
      return;
    else {
      const addedFeature = {
        id: features.length + 1,
        text: newFeature,
        votes: 1,
        upVoted: true,
        timestamp: Date.now(),
        tags: ['enahancement'],
      };
      setFeatures(features.concat(addedFeature));
      setNewFeature('');
    }
  };
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    console.log(window.location.pathname);
    Service.get(window.location.pathname).then(data => setFeatures(data[0].features));
  }, []);

  return (
    <div className="container">
      <div className="child">
        <div className="product-title">
          <h3>{id.toUpperCase()}</h3>
          <div className="sort">
            <p className={sortBy === 'votes' ? 'highlight' : ''} onClick={() => setSortBy('votes')}>POPULAR</p>
            <p> | </p>
            <p className={sortBy === 'timestamp' ? 'highlight' : ''} onClick={() => setSortBy('timestamp')}>LATEST</p>
          </div>
        </div>
      </div>
      <div className="child inputContainer">
        <form onSubmit={addFeature}>
          <input className="inputBar" value={newFeature} onChange={handleNewFeatureChange} placeholder="Enter a feature that you'd love to see"></input>
        </form>
      </div>
      {features.map((f, index) => { f['index'] = index; return f; }).filter(f => query ? f.tags.includes(query.toLowerCase()) || f.text.toLowerCase().includes(query.toLowerCase()) : true).sort((f1, f2) => f2[sortBy] - f1[sortBy]).map(
        (feature) => <Feature key={feature.id} features={features} index={feature.index} setFeatures={setFeatures} />
        , setFeatures)}
    </div>
  );
};

export default Product;
