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
      <MainText>
        You can look out my projects on{" "}
        <a
          href="https://github.com/DanikTre"
          target="_blank"
          style={{
            color: "rgba(255, 180, 133, 1)",
            fontSize: "22",
            fontWeight: "400",
          }}
        >
          GitHub
        </a>
        <p /> or check out my{" "}
        <a
          href="https://resume.io/r/3ga17dC0n"
          target="_blank"
          style={{
            color: "rgba(255, 180, 133, 1)",
            fontSize: "23",
            fontWeight: "400",
          }}
        >
          CV
        </a>
      </MainText>
    </Wrapper>
  );
};
export const AboutMemo = React.memo(About);
