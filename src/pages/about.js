import React from 'react';
import Layout from '../components/Layout';
import headshot from '../images/headshot.jpg';
import aboutStyles from './about.module.scss';

const About = ()=>{

    return(
        <Layout>
        <div className={aboutStyles.first_about_container}>
          <div>
          <p> I am a Community focused Software Engineer based in NYC. Besides coding into the wee hours of the night, you can spot me at the next WWCode, and GDI meetup. I, also run my own <a href="https://www.meetup.com/She-Builds-Black/">meetup</a> for black women software engineers through the nonprofit  <a href="https://www.webuildblack.com/">We Build Black </a>.</p>
          </div>
          <div>
              <img src={headshot}/>
          </div>
        </div>
        </Layout>
    )
}

export default About;