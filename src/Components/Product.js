import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  let { id } = useParams();
  let features = [
    {
      "text": "Improve UI",
      "votes": 100
    },
    {
      "text": "Add textbox to submit new feature",
      "votes": 50
    },
    {
      "text": "Add upvote/downvote",
      "votes": 10
    }
  ]
  return (
    <div class="container">
      <div class="child">
        <h1>{id.toUpperCase()}</h1>
      </div>
      {features.sort((f1, f2) => f2.votes - f1.votes).map((feature) =>
        <>
          <div class="child feature">
            <p>
              <span style={{ marginTop: "auto", marginBottom: "auto" }}>
                {feature.text}
              </span>
              <span style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "1rem"}}>
                {feature.votes}
              </span>
              <span class="container" style={{ marginRight: "0px"}}>
                <FontAwesomeIcon icon={faChevronUp} size="lg" className="voteup" />
                <FontAwesomeIcon icon={faChevronDown} size="lg" className="votedown" />
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Product