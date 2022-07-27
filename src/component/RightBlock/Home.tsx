import React from "react";
import styled from "styled-components";
import { Text, Wrapper } from "../common/Wrappers";

const TextWrap = styled.div`
  /* background-color: rgba(253, 178, 131, 0.1); */
  /* border-radius: 20px; */

  /* margin-top: -550px; */
  text-align: right;
  padding: 0 20px;

  /* transform: translate(0px, 250px);
  transition: transform 2s;
  transition-delay: 1s; */

  animation: slide-down 1.7s;

  @keyframes slide-down {
    from {
      opacity: 0.2;
      margin-top: -550px;
    }
    to {
      opacity: 1;
      margin-top: 0px;
    }
  }
`;

export const Home = () => {
  return (
    <Wrapper id={"Home"}>
      <TextWrap>
        <Text mrgLeft={3} mrgIn={3} fontSz={5}>
          I'm Frontend Developer
        </Text>
      </TextWrap>
    </Wrapper>
  );
};
export const HomeMemo = React.memo(Home);
