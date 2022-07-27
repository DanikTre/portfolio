import React from "react";
import { MenuType } from "../../store/store";
import styled from "styled-components";

const MainBlock = styled.a`
  display: flex;
  width: 40%;
  align-items: center;
  margin-bottom: 2vw;
  font-size: 1.3vw;
  font-weight: bolder;
  color: #b1c4ca92;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;

  :hover {
    color: rgba(253, 178, 131, 0.9);
  }
`;

const Img = styled.svg`
  width: 3vw;
  height: 2vw;
`;

type propsMenuType = {
  menu: Array<MenuType>;
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Menu = (props: propsMenuType) => {
  return (
    <>
      {props.menu.map((m) => {
        return (
          <MainBlock
            key={m.id}
            onClick={() => props.setActive(!props.active)}
            href={`#${m.title}`}
          >
            <Img>{m.img}</Img>
            {m.title}
          </MainBlock>
        );
      })}
    </>
  );
};
