import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Portfolio() {
    return (
        <div>
            <Navbar />
            <h1>My Most Recent Projects:</h1>
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
            <Footer />
        </div>
    )
}