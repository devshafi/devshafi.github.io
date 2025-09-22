import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook,  } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SiGooglescholar } from "react-icons/si";
// import { FaGoogleScholar } from "react-icons/fa6";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
                    <DiCssdeck size="3rem" /> <Span>DevShafi</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://www.facebook.com/frshafi" target="_blank">
                <SiGooglescholar size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://github.com/devshafi" target="_blank">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/fozle-rabbi-shafi-07841511a/" target="_blank">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
