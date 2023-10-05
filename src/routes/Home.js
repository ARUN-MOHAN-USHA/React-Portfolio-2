import React from 'react'
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
          <Card className="bg-dark text-white">
      <Card.Img src="https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1>Hii, I am Arun M</h1></Card.Title>
        <Card.Text>
          <h2>A Growing Full Stack Web Developer.</h2>
        </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  
    </div>
  )
}

export default Home