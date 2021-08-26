import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  let features = [
    {
      "text": "Improve UI"
    },
    {
      "text": "Add textbox to submit new feature"
    },
    {
      "text": "Add upvote/downvote"
    }
  ]
  return (
    <div class="container">
      <div class="child">
        <h1>{id.toUpperCase()}</h1>
      </div>
      {features.map((feature) =>
        <>
        <div class="child feature">
          <p>{feature.text}</p>
        </div>
        </>
      )}
    </div>
  )
}

export default Product