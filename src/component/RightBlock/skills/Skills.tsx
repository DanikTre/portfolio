import React from "react";
import { Skill } from "./Skill";
import { Wrapper } from "../../common/Wrappers";
import { RightBlockTitle } from "../../common/RightBlockTitle";

export const Skills = () => {
  return (
    <Wrapper id={"Skills"}>
      <RightBlockTitle width={32} title={"Skills"} />
      <Skill />
    </Wrapper>
  );
};
export const SkillsMemo = React.memo(Skills);
