import { useState } from "react";
import { useParams } from "react-router-dom";
import Feature from './Feature';

const Product = () => {
  let { id } = useParams();
  const [features, setFeatures] = useState([
    {
      "id": 1,
      "text": "Improve UI",
      "votes": 100
    },
    {
      "id": 2,
      "text": "Add textbox to submit new feature",
      "votes": 99
    },
    {
      "id": 3,
      "text": "Add upvote/downvote",
      "votes": 10
    }
  ]);
  return (
    <div className="container">
      <div className="child">
        <h1>{id.toUpperCase()}</h1>
      </div>
      {features.sort((f1, f2) => f2.votes - f1.votes).map(
        (feature, index) => <Feature key={feature.id} features={features} index={index} setFeatures={setFeatures} />
        , setFeatures)}
    </div>
  )
}

export default Product