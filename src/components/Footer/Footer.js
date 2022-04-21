import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
        <LinkColumn>
        <LinkTitle>
        Call
        </LinkTitle>
        <LinkItem href='Tel:111-111-11'>
        Tel:111-111-11
        </LinkItem>
        </LinkColumn>

        <LinkColumn>
        <LinkTitle>
          Email
        </LinkTitle>
        <LinkItem href='mailto:ness.cero1@gmail.com'>
            ness.cero1@gmail.com
        </LinkItem>
        </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
         <SocialContainer>
          <Slogan>
            eslogan de fotter 
          </Slogan>       
          </SocialContainer>
          <SocialIcons href='Github'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>

          <SocialIcons href='Instagram'>
            <AiFillInstagram size="3rem"/>
          </SocialIcons>

          <SocialIcons href='Linkedin'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>   
        </SocialIconsContainer>

      </FooterWrapper>
  );
};

export default Footer;
