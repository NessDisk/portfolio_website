import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding>
    <SectionDivider/> 
    <SectionTitle main> Projects </SectionTitle>
      <GridContainer> 
        {
          projects.map(({id, image, title, description, tags, source, visit})=>(
            <div>            
            <BlogCard key={id}>
            <Img src={image}/>
              <TitleContent>
                <HeaderThree titlle>
                {title}
                </HeaderThree>
                  <Hr/>
                  <CardInfo>
                    {description}
                  </CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                  <TagList>
                    {
                      tags.map((tags,i)=>(
                        <Tag key={i}>{tags} </Tag>
                      ))
                    }
                  </TagList>
                  </div>
                </TitleContent>
                    <UtilityList>
                      <ExternalLinks href={visit}>code</ExternalLinks>
                      <ExternalLinks href={source}>source</ExternalLinks>
                      
                    </UtilityList>  
                      <br/>
            </BlogCard>
            </div>
          ))
        }

      </GridContainer>

  </Section>
);

export default Projects;