import React from "react";
import styled from "styled-components";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import resume from "../assets/resume.png"
import { motion } from "framer-motion";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 12rem;
  color: #c3c3c3;
  margin-bottom: 2rem;
  margin-right: 4rem;
  position: absolute;
  bottom: 0;
  right: 0; // Change "right" to "left" for left positioning
  z-index: 99;

  @media (max-width: 650px) {
    width: 100%;
    margin: 1rem;
    align-items: center;
    margin-left: -2rem;
    padding: 1rem;
    position: relative;
  }
`;

const Social = styled.img`
  background-color: black;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (max-width: 650px) {
    align-items: start;
  }
`;

const ResumeButton = styled.button`
  background-color: #006633;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: black;

  &:hover {
    background-color: #004d40;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 1.6rem;

  @media (max-width: 650px) {
    align-items: start;
  }
`;

const Contact = () => {
  const variants = {
    hidden: { x: 100, opacity: 0, transition: { duration: 0.2 } }, // Slower animation
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }, // Slower animation
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
      }}
    >
      <Info>
        <p>What's next?</p>
        <h1>
          Get In 
          <a 
            href="mailto:luarsarsi@gmail.com"
            style={{ color: '#006633', paddingLeft: "14px" }}
          >Touch
          </a>
        </h1>
        <Center>
          <a 
            href="https://github.com/archieQa" 
            target="_blank"
          >
              <Social src={Github} alt="archieQa's Github" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/luarsqamo/"
            target="_blank"
          >
            <Social src={Linkedin} alt="archieQa's LinkedIn" />
          </a>
          <ResumeButton onClick={() => window.open("https://docs.google.com/document/d/1kqur_73lEkll_2JdJDEAjk6w7BRYFihjKLJo5trz_6g/edit?usp=drive_link", "_blank")} download>
            Download Resume
          </ResumeButton>
        </Center>
      </Info>
    </motion.div>
  );
};

export default Contact;
