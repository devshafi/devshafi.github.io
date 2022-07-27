import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, FocusSpan } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
     
        This is  <FocusSpan>Fozle Rabbi Shafi,</FocusSpan> an enthusiastic fullstack developer working with a range of technologies to actualize any idea into reality
      </SectionText>
      
      <Button onClick={() => window.location = 'mailto:frshafi49@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;