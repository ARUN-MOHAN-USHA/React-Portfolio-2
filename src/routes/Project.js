import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
// import '../styles/project.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function Project() {
  return (
    <div className='background-colour'>

    <Card>
        <Card.Img className='height' variant="top" src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        <Card.Body>
        </Card.Body>
      </Card>
      <h1 style={{ textDecoration: "underline", fontSize: "50px",color:"red",textAlign:"center" }}>MY PROJECTS</h1>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://m.economictimes.com/thumb/msid-64481882,width-1200,height-900,resizemode-4,imgsize-106319/kerala-tourism-getty.jpg" />
        <Card.Body>
          <Card.Title>Kerala Tourism Website</Card.Title>
          <Card.Text>
          A website which will help to know the Tourist places in kerala.
          </Card.Text>
          <a href="https://arun-mohan-usha.github.io/Kerala-Tourism-Site/" class="btn btn-primary">More</a>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.techrepublic.com/wp-content/uploads/2022/07/html-css-beginners.jpg?x27457" typeof='png' />
        <Card.Body>
          <Card.Title>Sample HTML, CSS Page</Card.Title>
          <Card.Text>
           A simple website bulid with HTML and CSS.
          </Card.Text>
          <a href="https://arun-mohan-usha.github.io/html-sample-project/" class="btn btn-primary">More</a>
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

export default Project