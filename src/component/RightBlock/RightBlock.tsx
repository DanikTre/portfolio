import React from "react";
import styled from "styled-components";
import { SkillsMemo } from "./skills/Skills";
import { ProjectMemo } from "./project/Project";
import { AboutMemo } from "./About";
import { ResumeMemo } from "./Resume";
import { HomeMemo } from "./Home";

const RightBlockWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  inset: 0;
  overflow: hidden;
`;

const Scroll = styled.div`
  z-index: 100;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: inherit;
`;

const InnerContent = styled.div`
  position: relative;
  width: 50%;
  left: 50%;
  overflow: visible;
  transform: translate(0px, -10px);
  transition: transform 0.75s;
  transition-delay: 0.75s;
`;

const SectionContainer = styled.div`
  max-width: 85%;
  position: relative;
`;

export const RightBlock = () => {
  return (
    <RightBlockWrapper>
      <Scroll>
        <InnerContent>
          <SectionContainer>
            <HomeMemo />
            <AboutMemo />
            <ResumeMemo />
            <SkillsMemo />
            <ProjectMemo />
            {/* <ContactMemo /> */}
          </SectionContainer>
        </InnerContent>
      </Scroll>
    </RightBlockWrapper>
  );
};
