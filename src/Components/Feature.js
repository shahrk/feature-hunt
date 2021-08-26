import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Feature = ({ features, index, setFeatures }) => {
  const updateVotes = (votes) => {
    const updatedFeature = { ...features[index] };
    let change = votes;
    if (updatedFeature.voted === change) {
      updatedFeature.voted = 0;
      updatedFeature.votes = updatedFeature.votes - votes;
    } else if (updatedFeature.voted !== 0) {
      updatedFeature.voted = change;
      updatedFeature.votes = updatedFeature.votes + votes + votes;
    } else {
      updatedFeature.voted = change;
      updatedFeature.votes = updatedFeature.votes + votes;
    }
    setFeatures(features.map((feature) => feature.id === features[index].id ? updatedFeature : feature));
  }
  return (
    <div className="child feature">
      <p>
        <span style={{ marginTop: "auto", marginBottom: "auto" }}>
          {features[index].text}
        </span>
        <span style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "1rem" }}>
          {features[index].votes}
        </span>
        <span className="container" style={{ marginRight: "0px" }}>
          <FontAwesomeIcon icon={faChevronUp} size="lg" className={features[index].voted <= 0? "voteup" : "votedUp"} onClick={() => { updateVotes(1) }} />
          <FontAwesomeIcon icon={faChevronDown} size="lg" className={features[index].voted >= 0? "votedown" : "votedDown"} onClick={() => { updateVotes(-1) }} />
        </span>
      </p>
    </div>
  );
}

export default Feature