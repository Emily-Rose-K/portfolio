import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function About() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Choose Your Fighter</h1>
            </div>
            <div id="fighters">
               <h3>Restorative</h3>
                <p>I am your bug finder, your problem solver, your “I need someone to poke holes in this plan” critical eye. 
                    Problems energize me. The stickier the better. Conflict doesn’t bother me, as long as we acknowledge and address it. 
                </p>
                <h3>Input</h3>
                <p>I am a walking, talking archive of all the things that might be important down the road. Need a resource? I have it. Need an obscure resource? I have that too.
                    I collect and share knowledge and put the teams collective resources to use.
                </p>
                <h3>Intellection</h3>
                <p>I am a thinker. See me pacing, talking to myself (or my computer), musing over something in order to come to a logical conclusion. Want to bounce ideas off someone? 
                    Me too, let me bounce them off you. Theories and practicalities are no stranger to my introspective self. 
                </p>
                <h3>Adaptability</h3>
                <p>I live in the moment. There is no tomorrow. There was no yesterday. Need me to switch focus? No problem. The structured and mundane day-to-day bores me. 
                    I crave the ever-changing excitement of the real world. </p>
                <h3>Activator</h3>
                <p>I am the first to ask, “When can we start?” Let’s stop talking and start doing. The team is stagnating? I can get us moving again. Not sure where to start on that project? 
                    I’ll help you get things kicked off. I love being the one to press the proverbial “Go” button. I’m the spark that creates action.
                </p>
            </div>
            <Footer />
        </div>
    )
}