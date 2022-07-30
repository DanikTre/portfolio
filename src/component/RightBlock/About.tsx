import React from "react";
import { MainText, Wrapper } from "../common/styles";
import { RightBlockTitle } from "../common/RightBlockTitle";

export const About = () => {
  return (
    <Wrapper id={"About"}>
      <RightBlockTitle width={3} title={"ABOUT"} />
      <MainText> I`m a junior Front-End Developer</MainText>
      <MainText>
        {" "}
        I'm primarily working with React Framework (JavaScript/TypeScript),
        Redux
        <br />
        Have good knowledge of HTML & CSS, styled-components, axios
      </MainText>
      <MainText>
        You can look up my projects on{" "}
        <a
          href="https://github.com/DanikTre"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: "rgba(255, 180, 133, 1)",
            fontSize: "22",
            fontWeight: "400",
          }}
        >
          GitHub
        </a>
        <br /> or check out my{" "}
        <a
          href="https://resume.io/r/3ga17dC0n"
          target="_blank"
          rel="noreferrer noopener"
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
