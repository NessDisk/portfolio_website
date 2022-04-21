import React from 'react';
import { DiFirebase, DiReact, DiZend, DiBootstrap } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech"> 
< SectionDivider/>
<br/>
<SectionTitle>
  Technologies 
</SectionTitle>
<SectionText>
  desciption:
</SectionText>
<List>

<ListItem>
  <DiReact   size="3rem"/>
  <ListContainer>
    <ListTitle> Back-end</ListTitle>
    <ListParagraph>
      Experien with<br/>
     Note and database
    </ListParagraph>
  </ListContainer>
</ListItem>
<ListItem>
  <DiFirebase   size="3rem"/>
  <ListContainer>
    <ListTitle> from-end</ListTitle>
    <ListParagraph>
      Experien with<br/>
      React.js
    </ListParagraph>
  </ListContainer>
</ListItem>
<ListItem>
  <DiBootstrap  size="3rem"/>
  <ListContainer>
    <ListTitle> UI/UX</ListTitle>
    <ListParagraph>
      Experien with<br/>
     Tool as react-bootstrap
    </ListParagraph>
  </ListContainer>
</ListItem>
</List>


</Section>

);

export default Technologies;
