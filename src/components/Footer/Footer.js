import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
    InspirationText,
    InspirationLink
} from "./FooterStyles";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+1613561661">+1613561661</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:f.shafi@queensu.ca">f.shafi@queensu.ca</LinkItem>
                </LinkColumn>
            </LinkList>
            <CompanyContainer>
                <Slogan>Turning ideas into reality, one line of code at a time.</Slogan>
                <InspirationText>
                    Theme inspired by{" "}
                    <InspirationLink 
                        href="https://www.youtube.com/@javascriptmastery" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        JavaScript Mastery
                    </InspirationLink>
                </InspirationText>
            </CompanyContainer>
            <SocialContainer>
                <SocialIcons href="https://scholar.google.ca/citations?user=2YkuKhcAAAAJ&hl=en" target="_blank">
                    <SiGooglescholar size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://github.com/devshafi" target="_blank">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/fozle-rabbi-shafi-07841511a/" target="_blank">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
            </SocialContainer>
        </FooterWrapper>
    );
};

export default Footer;
