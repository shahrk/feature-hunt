import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Feature = ({ features, index, setFeatures }) => {
  const upVote = () => {
    const updatedFeature = { ...features[index] };
    let currentVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.upVoted = !updatedFeature.upVoted;
    updatedFeature.downVoted = false;
    let newVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.votes = updatedFeature.votes - currentVote + newVote;
    setFeatures(features.map((feature) => feature.id === features[index].id ? updatedFeature : feature));
  }
  const downVote = () => {
    const updatedFeature = { ...features[index] };
    let currentVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.downVoted = !updatedFeature.downVoted;
    updatedFeature.upVoted = false;
    let newVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.votes = updatedFeature.votes - currentVote + newVote;
    setFeatures(features.map((feature) => feature.id === features[index].id ? updatedFeature : feature));
  }
  return (
    <div className="child feature">
      <p>
        <span style={{ marginTop: "auto", marginBottom: "auto" }}>
          {features[index].text}
        </span>
        <span style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "1rem", userSelect: "none" }}>
          {features[index].votes}
        </span>
        <span className="container" style={{ marginRight: "0px", userSelect: "none" }}>
          <FontAwesomeIcon icon={faChevronUp} size="lg" className={features[index].upVoted ? "votedUp" : "voteup"} onClick={upVote} />
          <FontAwesomeIcon icon={faChevronDown} size="lg" className={features[index].downVoted ? "votedDown" : "votedown"} onClick={downVote} />
        </span>
      </p>
    </div>
  );
}

export default Feature