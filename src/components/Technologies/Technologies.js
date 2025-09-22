import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { GiRobotGrab } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been working with diverse technologies for several years, continuously evolving and adapting to stay ahead of the curve. My journey in software development has been driven by a passion for learning and a commitment to excellence, always striving to become more proficient and innovative than yesterday.
    </SectionText>
    <List>
      <ListItem>
        <FaRobot size='3rem' />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            {/* Experienced in <br /> */}
            Generative AI, Hugging Face, Scikit-Learn
          </ListParagraph>

        </ListContainer>
      </ListItem>
       <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            {/* Experienced in <br /> */}
            Node, Express, GraphQL, MongoDB, MySQL
          </ListParagraph>

        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            {/* Experienced in <br /> */}
            React, Next, Vue, Nuxt
          </ListParagraph>

        </ListContainer>
      </ListItem>
     
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            {/* Experience with <br /> */}
            Bootstrap, Material UI, Vuetify, Figma
          </ListParagraph>

        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
