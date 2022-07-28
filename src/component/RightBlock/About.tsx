import React from "react";
import { MainText, Wrapper } from "../common/Wrappers";
import { RightBlockTitle } from "../common/RightBlockTitle";

export const About = () => {
  return (
    <Wrapper id={"About"}>
      <RightBlockTitle width={3} title={"ABOUT"} />
      <MainText> I`m a junior Front-End Developer</MainText>
      <MainText>
        {" "}
        I'm primarily working with React(JavaScrypt/TypeScrypt), Redux, HTML &
        CSS, etc...
      </MainText>
      <MainText> You can look into my projects on GitHub</MainText>
    </Wrapper>
  );
};
export const AboutMemo = React.memo(About);
