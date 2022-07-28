import { v1 } from "uuid";
import { AboutImg } from "../component/common/image/AboutImg";
import { ContactImg } from "../component/common/image/ContactImg";
import { HomeImg } from "../component/common/image/HomeImg";
import { PortfolioImg } from "../component/common/image/PortfolioImg";
import ResumeImg from "../component/common/image/ResumeImg";
import NewspaperImg from "../component/common/image/NewspaperImg.jpg";
import NewspaperImgg from "../component/common/image/NewspaperImgg.jpeg";
import ToDoListImg from "../component/common/image/ToDoListImg.jpg";
import SocialNetworkImg from "../component/common/image/SocialNetworkImg.jpg";
import { SkillsImg } from "../component/common/image/SkillsImg";

export type SkillType = {
  id: string;
  title: string;
  completed: number;
};
export type ProjectType = {
  id: string;
  title: string;
  text: string;
  href: string;
  img: string;
  hoveredImg: string;
};
export type ExperienceType = {
  project: string;
  data: string;
  position: string;
  info: string;
  id: string;
};

export type StoreType = {
  skills: Array<SkillType>;
  project: Array<ProjectType>;
  experience: Array<ExperienceType>;
  menu: Array<MenuType>;
};

export type MenuType = {
  id: string;
  title: string;
  img: {};
};

export const store: StoreType = {
  skills: [
    { id: v1(), title: "HTML / CSS", completed: 90 },
    { id: v1(), title: "JavaScript / TypeScript", completed: 70 },
    { id: v1(), title: "React / Redux / Redux Toolkit", completed: 76 },
    { id: v1(), title: "Styled Components", completed: 86 },
    { id: v1(), title: "Rest API", completed: 68 },
  ],
  project: [
    {
      id: v1(),
      title: "Newspaper",
      text: "",
      href: "https://DanikTre.github.io/newspaper",
      img: "https://img.freepik.com/premium-vector/news-concept-illustration-flat-design_23-2148268772.jpg",
      hoveredImg: NewspaperImg,
    },
    {
      id: v1(),
      title: "Todolist",
      text: "",
      href: "https://daniktre.github.io/todolist/",
      img: "https://c.neh.tw/thumb/f/720/5307142290538496.jpg",
      hoveredImg: ToDoListImg,
    },
    {
      id: v1(),
      title: "Social Network",
      text: "",
      href: "https://daniktre.github.io/socialnetwork/",
      img: "https://resources.workable.com/wp-content/uploads/2018/09/5-of-the-best-ways-to-advertise-job-openings-on-social-media-blog.png",
      hoveredImg: SocialNetworkImg,
    },
  ],
  experience: [
    {
      id: v1(),
      project: "Newspaper",
      data: "March 2022 - June 2022",
      position: "Front-End Developer",
      info: `Used technologies: React, React-Redux, React-router-dom v6, styled-components, @reduxjs/toolkit...`,
    },
    {
      id: v1(),
      project: "Social Network",
      data: "Dec 2021 - in progress",
      position: "Front-End Developer",
      info: `Used technologies: React, Redux, TypeScript, Redux-thunk, React-router-dom v6, React-hook-form, Axios...`,
    },
    {
      id: v1(),
      project: "Todolist",
      data: "May 2022 - June 2022",
      position: "Front-End Developer",
      info: `Used technologies: React, Redux, Redux-Toolkit, React-router-dom v6, Axios...`,
    },
  ],
  menu: [
    { id: v1(), title: "Home", img: <HomeImg /> },
    { id: v1(), title: "About", img: <AboutImg /> },
    { id: v1(), title: "Resume", img: <ResumeImg /> },
    { id: v1(), title: "Skills", img: <SkillsImg /> },
    { id: v1(), title: "Portfolio", img: <PortfolioImg /> },
    { id: v1(), title: "Contact", img: <ContactImg /> },
  ],
};
