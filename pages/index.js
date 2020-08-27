
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  </style>
  return (
    <div>
        <Navbar />
          <h1 id="emily">Emily Rose Krauss</h1>
          <div id="home-content">
            <img src="/mahface.png" alt="Emily Krauss headshot" id="avatar"/>
            <p id="intro"><span style={{fontWeight:"bold"}}>Hello!</span> So nice of you to stop by. I’m Emily, a software engineer residing in the Bay Area. </p>
            <p id="blurb">
            I found my passion for code while working in L&D at a startup. I built my first app to help my team track progress towards our goals. 
            Seeing people use a thing that I made to do their jobs better gave me a sense of pride I had never experienced before. I was hooked. 
            Now I’m pursuing that feeling full-time. <br></br>
            Some of my interests (other than coding) include: 
            team-building and team dynamics, emojis, journaling, multiplayer games, plants, and books.
            </p>
          </div>
        <Footer />
    </div>
  )
}
