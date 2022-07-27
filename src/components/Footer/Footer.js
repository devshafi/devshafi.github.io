import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+8801622971272' >+8801622971272</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:frshafi49@gmail.com' >frshafi49@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>
          Innovating one project at a time
        </Slogan>
      </CompanyContainer>
      <SocialContainer>

      <SocialIcons href='https://github.com/devshafi' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/fozle-rabbi-shafi-07841511a/' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/frshafi' target='_blank'>
        <AiFillFacebook size='3rem' />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
