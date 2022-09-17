import photo from './img/ab.jpg';
import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="photo">
        <img src={photo} alt="Andrew &amp; Brynn" />
      </div>
      <div className="content">
        <div className="intro section">
          <ul className="nav">
            <li><a href="#story">Prelude</a></li>
            <li><a href="#details">Details</a></li>
            <li><a href="#travel">Travel &amp; Lodging</a></li>
            <li><a href="#rsvp">RSVP</a></li>
          </ul>
          <div className="title">
            <img src={logo} alt="Andrew &amp; Brynn" className="logo" />
            <p className="location">Migis Lodge <br />South Casco, ME</p>
            <p className="date">june third, two thousand &amp; twenty-three</p>
          </div>

        </div>
        <div className="story section">
          <p>Our story goes here...</p>
        </div>
        <div className="details section">
          <p>Wedding details</p>
        </div>
        <div className="travel section">
          <p>Travel info</p>
        </div>
        <div className="rsvp section">
          <p>RSVP info</p>
        </div>
      </div>
    </div>
  );
}

export default App;
