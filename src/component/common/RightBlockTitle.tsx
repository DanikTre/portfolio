import React from "react";
import { Title } from "./Wrappers";

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
