import styled from "styled-components";
import MyPhoto from "../common/image/avatar.jpg";
import { LineMemo, LineSeparator } from "../common/Wrappers";
import React from "react";

export const AvatarWrapper = styled.div`
  position: relative;
  width: 24vw;
  height: 32vw;
  transform: translate(0%, 0px) rotateY(15deg);
  opacity: 1;
  z-index: 1;
  transition: transform 0.75s, opacity 1s;
  :hover {
    opacity: 0.8;
    transform: translate(10%, 0) rotateY(0deg);
  }
`;

export const PhotoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), 20%, rgba(7, 7, 7, 0));
`;

export const Photo = styled.div<{ bgImg: string }>`
  background-size: cover;
  position: absolute;
  background-position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: black;
  background-image: url("${(props) => props.bgImg}");
`;

export const NameWrapper = styled.div`
  position: absolute;
  left: 2.2vw;
  bottom: 2vw;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
`;

export const Name = styled.p`
  letter-spacing: 0;
  font-size: 1.8vw;
  font-weight: 100;
  line-height: 0;
  /* color: rgba(107, 148, 164, 1); */
  color: rgba(253, 178, 131, 0.9);
`;

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <PhotoWrapper>
        <Photo bgImg={MyPhoto} />
      </PhotoWrapper>
      <NameWrapper>
        <Name>Danik Trepachko</Name>
      </NameWrapper>
      <LineMemo opacity={0.25} width={-1} height={1} />
      <LineMemo opacity={0.15} width={-2} height={2} />
      <LineMemo opacity={0.05} width={-3} height={3} />
      <LineMemo opacity={0.02} width={-4} height={4} />
    </AvatarWrapper>
  );
};

export const AvatarMemo = React.memo(Avatar);
