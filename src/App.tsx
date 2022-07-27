import { useState } from "react";
import styled from "styled-components";
import { RightBlock } from "./component/RightBlock/RightBlock";
import { LeftBlock } from "./component/LeftBlock/LeftBlock";
import { gradient } from "./component/common/Wrappers";
import { Nav } from "./component/burger/Nav";
import { Burger } from "./component/burger/Burger";
import BackGroundVid from "./component/common/image/PexelsVideos4482.mp4";

const AppWrapper = styled.div`
  position: fixed;
  min-width: 100vw;
  top: 0;
  left: 0;
  min-height: 100vh;
  overflow: hidden;

  opacity: 1;
  transform: translate(0px, 0px);
  animation: ${gradient} 5s ease infinite;
`;

const NavOnOff = styled.div<{ width: number; opacity: number }>`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: hidden;
  transition: opacity 1s, transform 0.75s;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => `translate(${props.width}%,0px)`};
  transition-delay: 0.1s;
`;

const BackGroundVideo = styled.video`
  object-fit: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

function App() {
  const [active, setActive] = useState(false);

  return (
    <AppWrapper>
      <BackGroundVideo src={BackGroundVid} autoPlay muted loop />
      <NavOnOff opacity={active ? 0.6 : 1} width={active ? -25 : 0}>
        <LeftBlock />
        <RightBlock />
      </NavOnOff>
      <Burger active={active} onChange={setActive} />
      <Nav setActive={setActive} active={active} />
    </AppWrapper>
  );
}

export default App;
