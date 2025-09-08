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
                Hi, I'm Shafi, a graduate research student at Queen's University, Canada. I'm passionate about leveraging technology to solve real-world problems and create impactful solutions. With a strong foundation in computer science and hands-on experience in full-stack development, I thrive on turning innovative ideas into reality. Let's connect and explore how we can collaborate to make a difference through technology!
            </SectionText>

            <Button onClick={() => (window.location = "mailto:frshafi49@gmail.com")}>Contact Me</Button>
        </LeftSection>
    </Section>
);

export default Hero;
