import React from 'react';

import { 
  PublicationsContainer, 
  PublicationCard, 
  PublicationTitle, 
  PublicationAuthors, 
  PublicationVenue, 
  PublicationYear,
  PublicationLink,
  PublicationMeta
} from './PublicationsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { publications } from '../../constants/constants';

const Publications = () => (
  <Section id='publications'>
    <SectionDivider />
    <SectionTitle>Publications</SectionTitle>
    <PublicationsContainer>
      {publications.map((publication, index) => (
        <PublicationCard key={index}>
          <PublicationTitle>{publication.title}</PublicationTitle>
          <PublicationAuthors>{publication.authors}</PublicationAuthors>
          <PublicationVenue>{publication.publication}</PublicationVenue>
          <PublicationMeta>
            <PublicationYear>{publication.year}</PublicationYear>
            {publication.link && (
              <PublicationLink href={publication.link} target="_blank" rel="noopener noreferrer">
                View Publication
              </PublicationLink>
            )}
          </PublicationMeta>
        </PublicationCard>
      ))}
    </PublicationsContainer>
  </Section>
);

export default Publications;