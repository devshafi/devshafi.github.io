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
          Shafi <br />
          Fozle Rabbi
        </SectionTitle>
      </ImageAndName>
      <SectionText>
        Hi, I'm Shafi, a <FocusSpan>graduate research student</FocusSpan> at Queen's University,
        Canada. My research focuses on{" "}
        <FocusSpan>
          Generative AI, Machine Learning, Cybersecurity, and Software Engineering.
        </FocusSpan>
        I'm particularly passionate about applying Generative AI to advance healthcare solutions and 
        strengthen network security. With 4 published papers in reputable conferences and journals, 
        plus over 4 years of industry experience in software engineering roles, I bring both academic 
        rigor and practical expertise to my work.
      </SectionText>

      {/* <Button onClick={() => (window.location = "mailto:frshafi49@gmail.com")}>Contact Me</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
