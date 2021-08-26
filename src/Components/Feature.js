import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Feature = ({ features, index, setFeatures }) => {
  const updateVotes = (votes) => {
    const updatedFeature = {...features[index]};
    updatedFeature.votes = votes;
    setFeatures(features.map((feature)=>feature.id === features[index].id ? updatedFeature : feature));
  }
  return (
    <>
      <div className="child feature">
        <p>
          <span style={{ marginTop: "auto", marginBottom: "auto" }}>
            {features[index].text}
          </span>
          <span style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "1rem" }}>
            {features[index].votes}
          </span>
          <span className="container" style={{ marginRight: "0px" }}>
            <FontAwesomeIcon icon={faChevronUp} size="lg" className="voteup" onClick={() => { updateVotes(features[index].votes + 1) }} />
            <FontAwesomeIcon icon={faChevronDown} size="lg" className="votedown" onClick={() => { updateVotes(features[index].votes - 1) }} />
          </span>
        </p>
      </div>
    </>
  );
}

export default Feature