import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Carousel from 'react-bootstrap/Carousel'
// import '../styles/about.css'
import Card from 'react-bootstrap/Card';
import '../styles/about.css'
import CardGroup from 'react-bootstrap/CardGroup';




function AboutPage() {
  return (
    <div className='about'>
      {/* <Navbar></Navbar> */}
      <Card>
        <Card.Img className='height' variant="top" src="https://fi-hatchbox-production-uploads.s3.amazonaws.com/posts/44299297_s.jpg" />
        <Card.Body>
          <Card.Text>
          Hii hello..My name is Arun M and I am a passionate and enthusiastic web developer, eager to embark on an exciting journey in the world of technology and innovation.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <div className='text-align'>
      <h1 style={{ textDecoration: "underline", fontSize: "50px",color:"red" }}>EDUCATION</h1>
      <ul>
        <li>BTech in MECHANICAL ENGINEERING  from  Prist College of Engineering (2017-2021)</li>
        <li>XII From Pope Pius Higher Secondary School (2015-2016)</li>
        <li>X From Pope Pius Higher Secondary School (2014)</li>
      </ul>
      <h1 style={{ textDecoration: "underline", color: "red", fontSize: "50px" }}>Skills:</h1>
      <br/>
      <h2 style={{ textDecoration: "underline", color: "red" }}>Front-End</h2>
      <br/>
      <ul>
        ReactJS, HTML, CSS, Redux, Bootstrap
      </ul>
      <br/>
      <h2 style={{ textDecoration: "underline", color: "red" }}>Back-End</h2>
      <br/>
      <ul>
        NodeJS, Python, Mysql, .net
      </ul>
      <br/>
      <h2 style={{ textDecoration: "underline", color: "red" }}>Languages</h2>
      <br/>
      <ul>
        JavaScript, Python, Java, C++
      </ul>

      </div>

      <div>
        <h1 style={{ textDecoration: "underline", color: "red",textAlign: "center" }}>Hobby</h1>
      </div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.completesports.com/wp-content/uploads/Badminton.jpg" />
        <Card.Body>
          <Card.Title>Badminton</Card.Title>
          <Card.Text>
          Playing badminton in  free times is one of my favorite activity.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" />
        <Card.Body>
          <Card.Title>Reading Books</Card.Title>
          <Card.Text>
           When i am stressed, i usually prefer to read books.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?cs=srgb&dl=pexels-porapak-apichodilok-346885.jpg&fm=jpg" />
        <Card.Body>
          <Card.Title>Travelling</Card.Title>
          <Card.Text>
           Travel the world and see the nature is my passion
           and i love to do that.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>

      

     


      {/* <Footer></Footer> */}

    </div>
  )
}

export default AboutPage;