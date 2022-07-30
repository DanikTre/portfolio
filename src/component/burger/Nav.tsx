import React, { useRef, useCallback, useEffect } from "react";
import { Menu } from "./Menu";
import styled from "styled-components";
import { store } from "../../store/store";
import { Text } from "../common/styles";
import { InstaImg } from "../common/image/InstaImg";
import { TelegramImg } from "../common/image/TelegramImg";
import { LinkedinImg } from "../common/image/LinkedinImg";

const NavWrapper = styled.div<{ active: boolean }>`
  width: 25%;
  height: 100vh;
  background-color: rgba(105, 84, 82, 0.7);
  transform: ${(props) => `translate(${props.active ? 0 : 100}%,0rem)`};
  transition: transform 0.75s;
  transition-delay: 0.1s;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 60;
`;

const MenuWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 4vw;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) => `translate(0,${props.active ? 0 : -70}vw)`};
  transition: transform 0.75s, opacity 0.75s;
  transition-delay: 0.2s;
`;

const TextSocial = styled(Text)`
  font-size: 1.4vw;
  color: rgba(253, 178, 131, 0.7);
  font-weight: bolder;
  margin-bottom: 10px;
`;
const TextDanikTre = styled(Text)`
  font-size: 1vw;
  color: rgba(253, 178, 131, 0.7);
  font-weight: bolder;
  margin-bottom: 8px;
`;
const TextMenu = styled(TextSocial)`
  font-size: 1.6vw;

  cursor: initial;
  margin-bottom: 3vw;
`;
const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0 0 -4vw;
`;

const IconWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const Nav = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
}) => {
  const wrapperRef = useRef<any>(null);

  const outsideHandler = useCallback(
    (e: any) => {
      if (active && !wrapperRef.current.contains(e.target)) {
        setActive(false);
      }
    },
    [active, setActive]
  );

  useEffect(() => {
    window.addEventListener("click", outsideHandler);
    return () => {
      window.removeEventListener("click", outsideHandler);
    };
  }, [outsideHandler]);

  const menu = store.menu;
  return (
    <NavWrapper active={active} ref={wrapperRef}>
      <MenuWrapper active={active}>
        <TextMenu>Menu</TextMenu>
        <Menu active={active} setActive={setActive} menu={menu} />
        <SocialWrapper>
          <TextSocial>Social</TextSocial>
          <TextDanikTre>@daniktre</TextDanikTre>
          <IconWrapper>
            <a
              href={"https://www.linkedin.com/in/daniktre"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinImg />
            </a>
            <a
              href={"https://t.me/daniktre"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TelegramImg />
            </a>
            <a
              href={"https://www.instagram.com/daniktre"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstaImg />
            </a>
          </IconWrapper>
        </SocialWrapper>
      </MenuWrapper>
    </NavWrapper>
  );
};
