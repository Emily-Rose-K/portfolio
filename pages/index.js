import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div >
      <Navbar />
      <h1>Emily Rose Krauss</h1>
      <p>Hello! So nice of you to stop by. I’m Emily, a software engineer residing in the Bay Area. <br></br>
         I found my passion for code while working in L&D at a startup. I built my first app to help my team track progress towards our goals. 
         Seeing people use a thing that I made to do their jobs better gave me a sense of pride I had never experienced before. I was hooked. 
         Now I’m pursuing that feeling full-time. Some of my interests (other than coding) include: 
         team-building and team dynamics, emojis, journaling, multiplayer games, plants, and books.
      </p>
      <Footer />
    </div>
  )
}
