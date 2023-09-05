import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  return (
    <div className="container "  >

    <h1>Home Page</h1>
    <div><Link to="/login">Login</Link></div>

{/* <div id="demo" className="carousel slide" data-ride="carousel">

  
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
    <li data-target="#demo" data-slide-to="5"></li>
  </ul>
  
  
  <div className="carousel-inner pt-5 py-5 pb-5">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1600" alt="Los Angeles" width="1100" height="1000"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Chicago" width="1100" height="1000"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="New York" width="1100" height="1000"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="New York" width="1100" height="1000"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="New York" width="1100" height="1000"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="New York" width="1100" height="1000"/>
    </div>
  </div>
  
 
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div> */}

<button type="button" class="btn btn-dark btn-rounded mt-5 mb-5 btn-sm"> <Link to="/contact">Explore - now </Link></button>
<br></br>
<button type="button" class="btn btn-danger btn-rounded mt-5 mb-5 btn-sm text-white"> <Link to="/signup">Signup</Link></button>
    </div>
  );
}
