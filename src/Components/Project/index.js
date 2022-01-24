import React, {useState} from 'react';
import Contact from '../Contact'


function Project({ currentCategory}) {
  
    const [sections] = useState([
        {
            name: 'aboutMe',
            HTML: <section id="about-me" className="intro">
            <div className="flex-row"> 
                <h2 className="section-title">Meet Tony</h2>
            </div>
            <div className="content-wrap">
                    <img className="center" src="./assets/images/profile-picture.png" alt="headshot of a man in a suit" />
                <div>
                    <p>My name is Tony Busch and I am a mechanical engineer embarking on a journey to learn web development. During the day I help design and manufacture lifesaving medical devices and in the evening work towards learning the skills of a full stack developer. While some may consider this to be an odd combination, I get the most joy out of my work when I am constantly learning and developing new skills. I’m excited to see what experiences my unique skillset may lead to throughout my career!</p>
                    <br/>
                    <p>I started my professional training at the College of St. Scholastica in Duluth, Minnesota. I received my bachelor’s degree in biology, was also part of a football team that holds one of the winningest 4 year records in school history and met my now wife Nicole. While not knowing exactly what I would be doing in the future, I knew from the start that I wanted a career where I could help others. The medical field gives that opportunity to directly help others every day. So in 2016 I started an internship at a local medical device contract manufacturer while finishing up my master’s degree in mechanical engineering at St. Thomas in St. Paul, Minnesota. I graduated in 2017 and have been in the medical device field ever since.</p>
                    <br/>
                    <p>This website houses some of my projects that I’ve created as I work my way through the coding boot camp at the University of Minnesota. And while I am currently just learning and not ready to give up my full time engineer role, hopefully one day will contain links to more real life applications that I have had an essential stake in creating. </p>
            
                </div>
            </div>
        </section>
        },
        {
            name: 'portfolio',
            HTML: <section id="work" className="examples">
            <div className="flex-row">
                <h2 className="section-title">My Work</h2>
            </div>
            <div className="content-wrap">
                <article className="project">
                    <a href="https://tbusch74.github.io/run-buddy/"> <img src="./assets/images/RunBuddy.JPG" alt="website header for run buddy website" /></a>
                </article>
                <article className="project">
                    <a href="https://bycicleace.github.io/TrailFinder/"><img src="./assets/images/ParkFinder.JPG" alt="ParkFinder group project screenshot" /></a>
                </article>
                <article className="project">
                    <a href="https://boiling-refuge-70605.herokuapp.com/"><img src="./assets/images/BabyBrain.JPG" alt="Baby Brain group project screenshot" /></a>
                </article>
                <article className="project">
                    <a href="./coming-soon.html"><img src="http://via.placeholder.com/350x150/000000/FFFFFF/?text=Group+Project+3" alt="placeholder image for a group project" /></a>
                </article>
                <article className="project">
                    <a href="./coming-soon.html"><img src="http://via.placeholder.com/350x150/000000/FFFFFF/?text=Another+Project" alt="placeholder image for a group project" /></a>
                </article>
                <article className="project">
                    <a href="./coming-soon.html"><img src="http://via.placeholder.com/350x150/000000/FFFFFF/?text=My+Best+Work+Yet" alt="placeholder image for a group project" /></a>
                </article>
            </div>
        </section>
        },
        {
            name: 'resume',
            HTML: <section id="resume" className="resume">
            <div className="flex-row"> 
                <h2 className="section-title">My Resume</h2>
            </div>
            <div className='resumeButtonBox'>
                <a href='./assets/pdf/resume.pdf' download='Tony Busch Resume'><button className ='resumeButton'>Click to download my resume</button></a>
            </div>
            </section>
        }
    ])

    const currentSection = sections.filter((section) => section.name === currentCategory.name)
    const isContact = currentCategory.name === 'contact'

    return (
      <>
        {isContact
            ? <Contact></Contact> : currentSection[0].HTML
        }
      </>
    );
}

export default Project;