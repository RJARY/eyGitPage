/* eslint-disable jsx-a11y/anchor-is-valid */
import GitHubLogo from './GitHub logo.png';
import './App.css';
import {Form, Row, Col} from "react-bootstrap";

function App() {
  return (
    <div>
    <div className="App">
      <ul>
        <li><img src={GitHubLogo} alt="GitHub Logo" height="35px" width="40px" /></li>
        <li className="dropdown"><a className="dropbtn">Why GitHub?</a>
        <div className="dropdown-content">
      <a href="#" >Features</a>
      <a href="#" >Customer Stories</a>
      <a href="#" >Security</a>
    </div>
        </li>
        <li><a>Team</a></li>
        <li><a>Enterprise</a></li>
        <li className="dropdown"><a className="dropbtn">Explore</a>
        <div className="dropdown-content">
      <a href="#">Explore GitHub</a>
      <a href="#">Connect with others</a>
      <a href="#">Events</a>
    </div>
        </li>
        <li><a>Marketplace</a></li>
        <li className="dropdown"><a className="dropbtn">Pricing</a>
        <div className="dropdown-content">
      <a href={"#"}>Plans</a>
      <a href="#">Nonprofit</a>
      <a href="#">Education</a>
    </div>
        </li>
        <li style={{float:"right",marginLeft:"80%",position:"absolute"}}><a>Sign in</a></li>
        <li style={{float:"right", marginLeft:"85%", marginTop:"5px",position:"absolute",border:"1px solid white",borderRadius:"10px"}}><a>Sign up</a></li>
        
        <li style={{float:"right",marginRight:"20%"}}><input type="text" placeholder ="Search Github" className="InputBox" /></li>
      </ul>
      <div className="FormS">
      <Form>
      <Row>
      <Col>
      <Form.Group>
      <Form.Label className="FormTitles">Username</Form.Label>
      <div >
      
      <Form.Control 
      required 
      type="text"
      className="FormInputF"
      />
      </div>
      </Form.Group>
      <Form.Group>
      <Form.Label className="FormTitles">Email</Form.Label>
      <div style={{margin:"10px"}}>
      <Form.Control 
      required 
      type="email"
      className="FormInputF"
      />
      </div>
      </Form.Group>
      <Form.Group>
      <Form.Label className="FormTitles">Password</Form.Label>
      <div style={{margin:"10px"}}>
      <Form.Control 
      required 
      type="text"
      className="FormInputF"
      />
      </div>
      </Form.Group>
      <div style={{marginBottom:"20px",textAlign:"center"}}>
      <button style={{height:"30px",textAlign:"center",backgroundColor:"#2ebc4f", borderColor:"#2ebc4f", borderRadius:"5px", marginBottom:"10px"}}>Sign up for GitHub</button>
      </div>
      <p style={{textAlign:"center"}}>By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.</p>
      </Col>
      </Row>
      </Form>
      </div>
    </div>
    <div style={{textAlign: 'center',	marginBottom: '10px',fontWeight: 'bold'}}>See how the world's leading companies use GitHub Enterprise.</div>
  <div className="table">
    <ul id="horizontal-list">
      <li><img src="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg" width="200px" height="200px" alt="list item 1" />
      <div>MGM Resorts International & GitHub</div>
      </li>
      <li><img src="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg" width="200px" height="200px" alt="list item 1" />
      <div>Nationwide</div>
      </li>
      <li><img src="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg" width="200px" height="200px" alt="list item 1" />
      <div>SAP</div>
      </li>
      <li><img src="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg" width="200px" height="200px" alt="list item 1" />
      <div>Spotify</div>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default App;
