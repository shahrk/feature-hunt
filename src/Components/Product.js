import { useState } from "react";
import { useParams } from "react-router-dom";
import Feature from './Feature';

const Product = () => {
  let { id } = useParams();
  const [newFeature, setNewFeature] = useState('');
  const handleNewFeatureChange = (event) => {
    setNewFeature(event.target.value);
  }
  const [features, setFeatures] = useState([
    {
      "id": 1,
      "text": "Improve UI",
      "votes": 100,
      "voted": 0
    },
    {
      "id": 2,
      "text": "Add textbox to submit new feature",
      "votes": 100,
      "voted": 0
    },
    {
      "id": 3,
      "text": "Add upvote/downvote",
      "votes": 10,
      "voted": 0
    }
  ]);
  return (
    <div className="container">
      <div className="child">
        <h1>{id.toUpperCase()}</h1>
      </div>
      <div className="child inputContainer">
        <input className="inputBar" value={newFeature} onChange={handleNewFeatureChange} placeholder="Enter a feature that you'd love to see"></input>
      </div>
      {features.sort((f1, f2) => f2.votes - f1.votes).map(
        (feature, index) => <Feature key={feature.id} features={features} index={index} setFeatures={setFeatures} />
        , setFeatures)}
    </div>
  )
}

export default Product