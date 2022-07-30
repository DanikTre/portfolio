import React, { useState } from "react";
import { store } from "../../../store/store";
import styled from "styled-components";
import {
  Arrow,
  IconButton,
  IconButtonWrapper,
  LineSeparator,
  Text,
} from "../../common/styles";

const PortfolioWrapper = styled.div`
  opacity: 1;
  transform: translate(0px, 0px);
  width: 80%;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding-bottom: 46%;
  display: block;
  height: 1px;
  margin-top: 5vw;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    40%,
    rgba(7, 7, 7, 0.16)
  );
`;

export const Image = styled.div<{
  hovered: boolean;
  img: string;
  hoveredImg: string;
}>`
  background-size: cover;
  position: absolute;
  background-position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: black;
  background-image: ${({ hovered, hoveredImg, img }) =>
    `url(${hovered ? hoveredImg : img})`};
`;

const TitleWrapper = styled.div`
  position: absolute;
  height: 2vh;
  bottom: 4.2vw;
  left: 2vw;
`;

export const MyProject = () => {
  const project = store.project;

  const [hovered, setHovered] = useState(-1);

  return (
    <PortfolioWrapper>
      {project.map((m, index) => (
        <ImageWrapper
          key={m.id}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(-1)}
        >
          <a href={m.href} target="_blank" rel="noreferrer noopener">
            <IconButtonWrapper>
              <IconButton>
                <Arrow />
              </IconButton>
            </IconButtonWrapper>
          </a>
          <TitleWrapper>
            <Text width={32} mrgLeft={0} mrgIn={0} fontSz={2}>
              {m.title}
            </Text>
            <LineSeparator width={2.5} colorOpacity={1} />
          </TitleWrapper>
          <Image
            hovered={index === hovered}
            img={m.img}
            hoveredImg={m.hoveredImg}
          />
        </ImageWrapper>
      ))}
    </PortfolioWrapper>
  );
};
