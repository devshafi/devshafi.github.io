import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 5, text: 'Android Applications' },
  { number: 8, text: 'Company Projects', },
  { number: 300, text: 'Problem Solving', },
  { number: 10, text: 'Open Source Projects', }
];

const Accomplishment = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))
      }
    </Boxes>
  </Section>
);

export default Accomplishment;
