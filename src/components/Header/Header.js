import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color: "white" , marginBottom: "20px"}}> 
          <DiCssdeck size="3rem" />  <Span>Portafolio</Span>    
       </a>
      </Link>
  </Div1>

  <Div2>
    <li>
      <Link href="#proyect">
      <NavLink>Proyectos</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#Teach">
      <NavLink>Tecnologia</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
      <NavLink>Acerca</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
<SocialIcons href='Github'>
  <AiFillGithub size="3rem"/>
</SocialIcons>

<SocialIcons href='Instagram'>
  <AiFillInstagram size="3rem"/>
</SocialIcons>

<SocialIcons href='Linkedin'>
  <AiFillLinkedin size="3rem"/>
</SocialIcons>


  </Div3>
  </Container>

);

export default Header;
