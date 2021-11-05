import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

//
//       Component: ProductTile
//       Description: This component wraps the project in its separate box with an upvote and downvote.
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
const ProductTile = ({ products, index, setProducts }) => {
  const history = useHistory();
  const upVote = () => {
    const updatedProduct = { ...products[index] };
    let currentVote = updatedProduct.upVoted ? 1 : (updatedProduct.downVoted ? -1 : 0);
    updatedProduct.upVoted = !updatedProduct.upVoted;
    updatedProduct.downVoted = false;
    let newVote = updatedProduct.upVoted ? 1 : (updatedProduct.downVoted ? -1 : 0);
    updatedProduct.votes = updatedProduct.votes - currentVote + newVote;
    setProducts(products.map((product) => product.id === products[index].id ? updatedProduct : product));
  };
  const downVote = () => {
    const updatedProduct = { ...products[index] };
    let currentVote = updatedProduct.upVoted ? 1 : (updatedProduct.downVoted ? -1 : 0);
    updatedProduct.downVoted = !updatedProduct.downVoted;
    updatedProduct.upVoted = false;
    let newVote = updatedProduct.upVoted ? 1 : (updatedProduct.downVoted ? -1 : 0);
    updatedProduct.votes = updatedProduct.votes - currentVote + newVote;
    setProducts(products.map((product) => product.id === products[index].id ? updatedProduct : product));
  };
  const goTo = (product) => () => {
    history.push(`/${product}`);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="child product">
      <div className="product-container">
        <div className="image-container">
          <img src={products[index].image_url} alt={products[index].name} />
        </div>
        <div className="content">
          <div className="product-content">
            <span className="product-title" 
            data-testid={"ptnav:"+index}
            onClick={goTo(products[index].name)} 
            style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              {capitalizeFirstLetter(products[index].name)}
            </span>
            <p className="product-description">
              {products[index].description}
            </p>
          </div>
          <div className="tag-container">
            {products[index]['tags'].map(tag =>
              <div key={tag}>
                <span className="tag">{tag.toUpperCase()}</span>
                <div>&nbsp;</div>
              </div>
            )}
          </div>
        </div>
        <div className="votes-container">
          <span>
            <FontAwesomeIcon icon={faChevronUp} size="lg" 
            className={products[index].upVoted ? 'votedUp' : 'voteup'} 
            data-testid={"pt_up:"+index}
            onClick={upVote} />
          </span>
          <span>
            {products[index].votes}
          </span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} 
            size="lg" 
            className={products[index].downVoted ? 'votedDown' : 'votedown'} 
            data-testid={"pt_down:"+index}
            onClick={downVote} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
