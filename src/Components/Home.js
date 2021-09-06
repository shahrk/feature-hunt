import { useState } from "react";
import ProductTile from "./ProductTile";

const Home = ({query}) => {
  const [sortBy, setSortBy] = useState('votes');
  console.log(query);
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "feature-hunt",
      "description": "Feature Hunt is a platform where users can share, vote, and discuss feature requests and product owners can organize (categorize/prioritize) these requests. Instead of each product having it's own feature request page/portal we create a central hub where any product can interact with its users.",
      "votes": 2,
      "features": [
        {
          "id": 1,
          "text": "Create dashboard for product owners",
          "votes": 1,
          "timestamp": 1530815581293,
          "tags": [
            "enhancement"
          ]
        },
        {
          "id": 2,
          "text": "Create product page",
          "votes": 1,
          "timestamp": 1530814681293,
          "tags": [
            "enhancement"
          ]
        },
        {
          "id": 3,
          "text": "Make likes consistent",
          "votes": 3,
          "timestamp": 1530814981293,
          "tags": [
            "bug fix"
          ]
        }
      ],
      "tags": [
        "productivity",
        "web app"
      ]
    },
    {
      "id": 2,
      "name": "disentry",
      "description": "Disentry is a discord bot that can help you organize & easily search messages in any discord server.",
      "votes": 1,
      "features": [
        {
          "id": 1,
          "text": "Enable scheduling/reminders",
          "votes": 1,
          "timestamp": 1530815581293,
          "tags": [
            "enhancement"
          ]
        },
        {
          "id": 2,
          "text": "Enable playing music",
          "votes": 2,
          "timestamp": 1530814681293,
          "tags": [
            "enhancement"
          ]
        },
        {
          "id": 3,
          "text": "Add feature for moderating chats",
          "votes": 0,
          "timestamp": 1530814981293,
          "tags": [
            "enhancement"
          ]
        }
      ],
      "tags": [
        "bot",
        "fun"
      ]
    }
  ]);
  return (
    <div className="container">
      <div className="child">
        <div className="product-title">
          <h3>PRODUCTS</h3>
          <div className="sort">
            <p class={sortBy === 'votes' ? "highlight" : ""}  onClick={() => setSortBy('votes')}>POPULAR</p>
            <p> | </p>
            <p class={sortBy === 'timestamp' ? "highlight" : ""} onClick={() => setSortBy('timestamp')}>LATEST</p>
          </div>
        </div>
      </div>
      {products.map((p,index) => {p['index']=index; return p}).filter(p => query ? p.tags.includes(query.toLowerCase()) || p.name.toLowerCase().includes(query.toLowerCase()) : true).sort((p1, p2) => p2[sortBy] - p1[sortBy]).map(
        (product) => <ProductTile key={product.id} products={products} index={product.index} setProducts={setProducts} />
        , setProducts)}
    </div>
  )
}

export default Home