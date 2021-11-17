import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import Feature from './Feature';
import Service from '../Service';

//
//       Component: Product
//       Description: This component allows the user to add specific features and
//       allows the user to upvote or downvote the features
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
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
        tags: ['enhancement'],
      };
      setFeatures(features.concat(addedFeature));
      setNewFeature('');
    }
  };
  const [features, setFeatures] = useState([]);
  const [user, setUser] = useState('');
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname);
    setUser(ReactSession.get("username"));
    Service.get(window.location.pathname).then(data => {
      setFeatures(data[0] ? data[0].features : []);
      if (data[0] && data[0].users && data[0].users.includes(user)) {
        setEditable(true);
      }
    });
  }, [user]);

  return (
    <div className="container">
      <div className="child">
        <div className="product-title">
          <h3>{id.toUpperCase()}</h3>
          <div className="sort">
            <p className={sortBy === 'votes' ? 'highlight' : ''} data-testid="prod_sortpop" onClick={() => setSortBy('votes')}>POPULAR</p>
            <p> | </p>
            <p className={sortBy === 'timestamp' ? 'highlight' : ''} data-testid="prod_sorttime" onClick={() => setSortBy('timestamp')}>LATEST</p>
          </div>
        </div>
      </div>
      <div className="child inputContainer">
        <form data-testid="prod_form" onSubmit={addFeature}>
          <input 
          className="inputBar" 
          data-testid="prod_input"
          value={newFeature} 
          onChange={handleNewFeatureChange} 
          placeholder="Enter a feature that you'd love to see">
          </input>
        </form>
      </div>
      {features.map((f, index) => { f['index'] = index; return f; }).filter(f => query ? f.tags.includes(query.toLowerCase()) || f.text.toLowerCase().includes(query.toLowerCase()) : true).sort((f1, f2) => f2[sortBy] - f1[sortBy]).map(
        (feature) => <Feature key={feature.id} features={features} index={feature.index} setFeatures={setFeatures} editable={editable}/>
        , setFeatures)}
    </div>
  );
};

export default Product;
