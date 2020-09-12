
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React,  { useState } from 'react'

export default function Home() {
  const [text, setText] = useState("")

  const chooseFighter = (e) => {
      if (e.target.id === "restorative") {
          setText("Restorative: I am your bug finder, your problem solver, your “I need someone to poke holes in this plan” critical eye. Problems energize me. The stickier the better. Conflict doesn’t bother me, as long as we acknowledge and address it. ")
      }
      else if (e.target.id === "input"){
          setText("Input: I am a walking, talking archive of all the things that might be important down the road. Need a resource? I have it. Need an obscure resource? I have that too. I collect and share knowledge and put the teams collective resources to use.")
      }
      else if (e.target.id === "intellection") {
          setText("Intellection: I am a thinker. See me pacing, talking to myself (or my computer), musing over something in order to come to a logical conclusion. Want to bounce ideas off someone? Me too, let me bounce them off you. Theories and practicalities are no stranger to my introspective self. ")
      }
      else if (e.target.id === "activator") {
          setText("Activator: I am the first to ask, “When can we start?” Let’s stop talking and start doing. The team is stagnating? I can get us moving again. Not sure where to start on that project? I’ll help you get things kicked off. I love being the one to press the proverbial “Go” button. I’m the spark that creates action.")
      }
      else if (e.target.id === "adaptability") {
          setText("Adaptability: I live in the moment. There is no tomorrow. There was no yesterday. Need me to switch focus? No problem. The structured and mundane day-to-day bores me. I crave the ever-changing excitement of the real world. ")
      }
  }

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
            Witnessing my team use a product that I built gave me a sense of pride I had never experienced before.<span style={{fontWeight:"bold"}}> I was hooked.</span><br></br>
            Some of my interests (other than coding) include: 
            team-building and team dynamics, emojis, journaling, multiplayer games, plants, and books.
            </p>
          </div>
          <div>
                <h1 id="choose">How I approach my work. </h1>
            </div>
            <div id="fighters">
                <h3 id="restorative" onClick={chooseFighter}>🛠</h3>
                <h3 id="input" onClick={chooseFighter}>📚</h3>
                <h3 id="intellection" onClick={chooseFighter}>🧠</h3>
                <h3 id="activator" onClick={chooseFighter}>🎬</h3>
                <h3 id="adaptability" onClick={chooseFighter}>🌊</h3>   
            </div>
            <div id="fighter">
                <p>{text}</p>
            </div>
            <div>
            <h1 id="portfolio">My Most Recent Projects:</h1>
            <div id="flower-farm">
                <h3>Flower Farm</h3>
                <p>This cute, simple farming game was build with HTML canvas. Play as a farmer and
                    collect sparkles as your flowers grow! <a href="https://emily-rose-k.github.io/flower-farm/">Play</a>
                </p>
            </div>
            <div id="project-tracker">
                <h3>Project Tracker</h3>
                <p>Built with Node.js and Express, this project tracker allows you to track your teams progress towards
                    shared goals. 
                </p>
            </div>
            <div id="reading-buddy">
                <h3>Reading Buddy</h3>
                <p>This was a collaborative project between myself, <a href="https://charleshperry.com">Charles Perry</a>, Elliot Davidson, and Scott McLeod. We attempted
                    to create an online experience for readers using React and react-bootstrap. We're currently working on adding the
                    finishing touches. <a href="https://compassionate-swirles-569ce5.netlify.app/">Check it out!</a>
                </p>
            </div>
            <div id="okr-tracker">
                <h3>OKR Tracker</h3>
                <p>My OKR tracker was the first app I ever built. It was made with Ruby on Rails and Bootstrap, and was designed with one team in mind. 
                    I'm planning to flesh it out more and allow users to create and join teams. <a href="https://talentteam-okr-tracker.herokuapp.com/">Check it out!</a>
                </p>
            </div>
    </div>
    <Footer />
  </div>
  )
}
