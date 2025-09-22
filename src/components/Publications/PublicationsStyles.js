import styled from 'styled-components';

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const PublicationCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const PublicationTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.4;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const PublicationAuthors = styled.p`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const PublicationVenue = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  font-style: italic;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const PublicationYear = styled.span`
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-block;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.0rem;
    padding: 0.25rem 0.6rem;
  }
`;

export const PublicationLink = styled.a`
  color: #13ADC7;
  text-decoration: none;
  font-weight: 500;
  margin-left: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #945DD6;
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

export const PublicationMeta = styled.div`
  display: flex;
  align-items: center;
  
  flex-wrap: wrap;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
