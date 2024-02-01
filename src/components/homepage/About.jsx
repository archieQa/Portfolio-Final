import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';
import { ContainerSlideIn } from '../../pages/Projects';

const AboutDiv = styled(motion.div)`
  max-width: 24rem; 
  max-height: 27rem;
  color: #c3c3c3;
  position: absolute;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;

  
  &::-webkit-scrollbar {
    width: 8px;
    height: 4px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #006633;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1a1a1a; 
  }

  p {
    padding-bottom: 1rem;
  }

  @media (max-width: 650px) {
    width: 280px;
    height: 50%;
    position: relative;
    margin-left: -1.6rem;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    overflow-y: scroll; 
    overflow-x: hidden;
  }
}
`;
const About = () => {
  return (
    <AboutDiv
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <ContainerSlideIn variants={fadeIn("left", "tween", 0.2, 0.6)}>
      <div>
        <p>
          👋 Hi there! I'm Archie or Luars a software developer with roots in Albania, where my journey kicked off at a top-notch school for comp science and electrical engineering. I dove into programming by building small apps and got real about it through internships. Currently I am living in the beautiful country of Germany.
        </p>
        <p>
          I'm big on self-learning 📚, especially loving Python and JavaScript. I've professionally rocked JavaScript, React, Next.js, and I'm comfy with Django and Node.js for the backend hustle. CSS and HTML? Got those in my pocket too.
        </p>
        <p>
          Check out my projects to see what I've been up to! 🚀
        </p>
        <p>
          Inspired by legends like da Vinci and tales like "The Alchemist," I mix creativity with hard work. My aim? To be among the tech greats, enhance my skills with big tech names, and maybe, just maybe, change the world. 🌍
        </p>
        <p>
          Stay tuned, and let's make something awesome together!
        </p>
      </div>   
    </ContainerSlideIn>
  </AboutDiv>
  );
};

export default About;
