import React from "react";
import { Title } from "./styles";

type PropsType = {
  title: string;
  width: number;
};

export const RightBlockTitle = (props: PropsType) => {
  return (
    <>
      <Title fontSz={2}>{props.title}</Title>
    </>
  );
};
