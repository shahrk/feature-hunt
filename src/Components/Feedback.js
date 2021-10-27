import { useEffect} from 'react';
import Header from './Header';

const Feedback = () => {
    useEffect(() => {
        console.log(window.location.pathname);
    }, []);
  
  return (
    <div><Header/>
    <div className="container">
      <div className="child">
        <div className="feedback">
          <h3>Leave a comment in the box below</h3>
                 May take some time to load, please be patient!
              <p></p>
              <p></p>
              <p></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feedback;