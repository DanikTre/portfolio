import React from "react";
import { MainText, Title, Wrapper } from "../common/styles";
import { RightBlockTitle } from "../common/RightBlockTitle";
import styled from "styled-components";
import { store } from "../../store/store";

const ExperienceWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 25vw;
  margin-top: 2vw;
  padding: 2vw 4vw 2vw 4vw;
  z-index: 1;
  transform: translate(20%, 0%);

  //border-width: 0;
  //border-color: white;
  //border-style: solid;
  //border-left-width: 1px;
`;

const LineExperience = styled.div`
  width: 4vw;
  border-width: 0;
  border-color: white;
  border-style: solid;
  border-bottom-width: 2px;
  opacity: 1;
  transform: translate(-12vw, 3vw) rotate(90deg);
`;

const LineResume = styled.div`
  width: 32vw;
  border-width: 0;
  border-color: white;
  border-style: solid;
  border-bottom-width: 1px;
  opacity: 0.3;
  transform: translate(-26vw, 13vw) rotate(90deg);
`;

export const Resume = () => {
  const experience = store.experience;
  return (
    <Wrapper id={"Resume"}>
      <RightBlockTitle title={"RESUME"} width={32} />
      <MainText>These are the demo projects that I've created</MainText>

      {experience.map((m) => {
        return (
          <ExperienceWrapper key={m.id}>
            <LineExperience />
            <LineResume />
            <Title fontSz={1.1}>{m.project}</Title>
            <MainText fontSz={"1.4vw"}>{m.info}</MainText>
          </ExperienceWrapper>
        );
      })}
    </Wrapper>
  );
};

export const ResumeMemo = React.memo(Resume);
