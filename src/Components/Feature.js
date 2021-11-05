import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button, TextField } from '@mui/material';
import Service from '../Service';
//
//       Component: Feature
//       Description: This component is the specific feature which has the up and down votes
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
const Feature = ({ features, index, setFeatures, editable }) => {
  const upVote = () => {
    const updatedFeature = { ...features[index] };
    let currentVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.upVoted = !updatedFeature.upVoted;
    updatedFeature.downVoted = false;
    let newVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.votes = updatedFeature.votes - currentVote + newVote;
    setFeatures(features.map((feature) => feature._id === features[index]._id ? updatedFeature : feature));
  };
  const downVote = () => {
    const updatedFeature = { ...features[index] };
    let currentVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.downVoted = !updatedFeature.downVoted;
    updatedFeature.upVoted = false;
    let newVote = updatedFeature.upVoted ? 1 : (updatedFeature.downVoted ? -1 : 0);
    updatedFeature.votes = updatedFeature.votes - currentVote + newVote;
    setFeatures(features.map((feature) => feature._id === features[index]._id ? updatedFeature : feature));
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [newTag, setNewTag] = useState('');

  const handleTextChange = (e) => {
    setNewTag(e.target.value);
  }

  /* TODO : save new tag to database */
  const addNewTag = () => {
    features[index]['tags'].push(newTag);
    const form = new FormData();
    form.append("features", JSON.stringify(features));
    Service.post(window.location.pathname + "/features", form).then(data => {});
    setNewTag('');
  }

  return (
    <div className="child feature">
      <div className="feature-container">
        <div className="content">
          <div className="feature-content" data-testid={"feature_content:"+features[index].id}>
            <span style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              {capitalizeFirstLetter(features[index].text)}
            </span>
          </div>
          <div className="tag-container" data-testid={"feature_tag_container:"+features[index].id}>
            {features[index]['tags'].map(tag =>
              <div key={tag}>
                <span className="tag" data-testid="feature_tag">{tag.toUpperCase()}</span>
                <div>&nbsp;</div>
              </div>
            )}
            {editable && 
            <div>
              <TextField
                data-testid={"feature_addtag:"+ features[index].id}
                label="Add New Tag"
                inputProps={{ "data-testid": "newTag-input:" + features[index].id }}
                value={newTag}
                size="small"
                onChange={handleTextChange}
              />
              <Button 
              data-testid={"feature_tagbutton:" + features[index].id}
              onClick={addNewTag}>Add</Button> 
            </div> }
          </div>
        </div>
        <div className="votes-container">
          <span>
            <FontAwesomeIcon icon={faChevronUp} 
            size="lg" 
            className={features[index].upVoted ? 'votedUp' : 'voteup'} 
            data-testid={"feature_upvote:"+features[index].id}
            onClick={upVote} />
          </span>
          <span data-testid={"fvoteval:" + features[index].id}>
            {features[index].votes}
          </span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} 
            size="lg" 
            className={features[index].downVoted ? 'votedDown' : 'votedown'} 
            data-testid={"feature_downvote:" + features[index].id}
            onClick={downVote} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
