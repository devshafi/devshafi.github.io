import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, FocusSpan } from "./HeroStyles";
const image = "/images/fozle-rabbi-shafi.jpeg";
import { Img } from "../Projects/ProjectsStyles";
import { ProfileImg, ImageAndName } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <ImageAndName>
        <ProfileImg src={image} alt="Profile Image" />
        <SectionTitle main center>
          Fozle Rabbi Shafi
        </SectionTitle>
      </ImageAndName>
      <SectionText>
        Hi, I'm Shafi, a <FocusSpan>PhD student</FocusSpan> at <FocusSpan>Queen's University</FocusSpan>,
        Canada. My research focuses on{" "}
        <FocusSpan>
          Generative AI, Machine Learning, Cybersecurity, and Software Engineering.
        </FocusSpan>
        As a continuous learner, I'm passionate about exploring cutting-edge technologies and their 
        applications in healthcare and cybersecurity. Through my research journey and hands-on 
        industry experience, I constantly seek to bridge the gap between theoretical knowledge and 
        practical solutions, always staying curious about emerging trends in AI and technology.
      </SectionText>

      {/* <Button onClick={() => (window.location = "mailto:frshafi49@gmail.com")}>Contact Me</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
