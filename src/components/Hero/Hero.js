import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       Bienvenido <br/>
        Mi Personal Portafolio
      </SectionTitle>
      <SectionText>
        Presentacion ..
      </SectionText>
    <Button onClick={ ()=> window.location = `https://www.google.com/`} >
      Mas info
    </Button>
    </LeftSection>


  </Section>
);

export default Hero;